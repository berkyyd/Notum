import argparse
import json
import re
import sys
import unicodedata
from pathlib import Path


def clean_text(value):
    if value is None:
        return ""
    if isinstance(value, float) and value != value:
        return ""
    return unicodedata.normalize("NFC", re.sub(r"\s+", " ", str(value)).strip())


def is_program_code(value):
    text = clean_text(value)
    return bool(re.fullmatch(r"\d{6,}", text))


def title_city(text):
    text = clean_text(text)
    words = []
    for word in text.split():
        lower = word.translate(str.maketrans({"I": "ı", "İ": "i"})).lower()
        first = lower[:1].translate(str.maketrans({"i": "İ", "ı": "I"})).upper()
        words.append(first + lower[1:])
    return " ".join(words)


def university_name_city_and_type(text):
    text = clean_text(text)
    parts = re.findall(r"\(([^)]*)\)", text)
    name = re.sub(r"\s*\([^)]*\)", "", text).strip()
    university_type = ""
    city = ""
    for part in parts:
        value = clean_text(part)
        if value in {"Devlet Üniversitesi", "Vakıf Üniversitesi", "KKTC", "Yurt Dışı"}:
            university_type = value
        elif value and not city:
            city = title_city(value)
    return name or text, city, university_type


def looks_like_university(text):
    upper = clean_text(text).upper()
    return "ÜNİVERSİTESİ" in upper or "ÜNİVERSITESİ" in upper or "UNIVERSITESI" in upper


def unit_type(name):
    upper = name.upper()
    if "MESLEK YÜKSEKOKULU" in upper:
        return "Meslek Yüksekokulu"
    if "YÜKSEKOKULU" in upper:
        return "Yüksekokul"
    if "FAKÜLTESİ" in upper or "FAKÜLTESI" in upper:
        return "Fakülte"
    if "KONSERVATUVAR" in upper:
        return "Konservatuvar"
    if "ENSTİTÜ" in upper or "ENSTITÜ" in upper:
        return "Enstitü"
    return "Akademik Birim"


def source_level(table_name, faculty):
    if "tablo3" in table_name.lower() or unit_type(faculty) == "Meslek Yüksekokulu":
        return "onlisans"
    return "lisans"


def extract_language(program):
    match = re.search(r"\(([^)]*İngilizce[^)]*|[^)]*Arapça[^)]*|[^)]*Almanca[^)]*|[^)]*Fransızca[^)]*)\)", program, re.I)
    return match.group(1).strip() if match else ""


def normalize_department(program):
    text = clean_text(program)
    removals = [
        r"\(KKTC Uyruklu\)",
        r"\(Okul Birincisi\)",
        r"\(Depremzede Adaylar\)",
        r"\(Şehit ve Gazi Yakını\)",
        r"\(Engelli Adaylar\)",
        r"\(İngilizce\)",
        r"\(Arapça\)",
        r"\(Almanca\)",
        r"\(Fransızca\)",
        r"\(%\s*\d+\s*İngilizce\)",
        r"\(Burslu\)",
        r"\(%\s*\d+\s*İndirimli\)",
        r"\(Ücretli\)",
        r"\(İÖ\)",
        r"\(İkinci Öğretim\)",
        r"\(Uzaktan Öğretim\)",
        r"\(Açıköğretim\)",
    ]
    for pattern in removals:
        text = re.sub(pattern, "", text, flags=re.I)
    return re.sub(r"\s+", " ", text).strip()


def extract_rows(path):
    import pandas as pd

    df = pd.read_excel(path, sheet_name=0, header=None, engine="xlrd")
    current_university = ""
    current_city = ""
    current_university_type = ""
    current_faculty = ""
    records = []

    for _, row in df.iterrows():
        code = clean_text(row.iloc[0] if len(row) > 0 else "")
        name = clean_text(row.iloc[1] if len(row) > 1 else "")
        if not name:
            continue

        if is_program_code(code):
            if not current_university or not current_faculty:
                continue
            records.append(
                {
                    "source": "YOK Atlas",
                    "sourceTable": path.name,
                    "level": source_level(path.name, current_faculty),
                    "programCode": code,
                    "university": current_university,
                    "city": current_city,
                    "universityType": current_university_type,
                    "faculty": current_faculty,
                    "unitType": unit_type(current_faculty),
                    "department": normalize_department(name),
                    "program": name,
                    "language": extract_language(name),
                }
            )
            continue

        if looks_like_university(name):
            current_university, current_city, current_university_type = university_name_city_and_type(name)
            current_faculty = ""
        elif current_university:
            current_faculty = name

    return records


def dedupe(records):
    by_key = {}
    for record in records:
        key = (
            record["university"].casefold(),
            record["faculty"].casefold(),
            record["department"].casefold(),
            record["program"].casefold(),
            record["level"],
        )
        by_key.setdefault(key, record)
    return sorted(
        by_key.values(),
        key=lambda item: (item["university"], item["faculty"], item["department"], item["program"], item["programCode"]),
    )


def main():
    parser = argparse.ArgumentParser(description="Build Notum YOK Atlas program catalog JSON from OSYM/YOK Excel tables.")
    parser.add_argument("--xlrd-path", default="", help="Optional path containing xlrd when it is installed outside the Python environment.")
    parser.add_argument("--output", required=True)
    parser.add_argument("inputs", nargs="+")
    args = parser.parse_args()

    if args.xlrd_path:
        sys.path.insert(0, args.xlrd_path)

    records = []
    for input_path in args.inputs:
        records.extend(extract_rows(Path(input_path)))

    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(dedupe(records), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(dedupe(records))} records to {output}")


if __name__ == "__main__":
    main()

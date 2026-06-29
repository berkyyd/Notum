CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('student', 'seller', 'admin')),
  university TEXT,
  department TEXT,
  email_verified BOOLEAN NOT NULL DEFAULT FALSE,
  edu_verified BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notes (
  id TEXT PRIMARY KEY,
  seller_id TEXT NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  university TEXT NOT NULL,
  faculty TEXT NOT NULL,
  department TEXT NOT NULL,
  course TEXT NOT NULL,
  instructor TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_type TEXT NOT NULL CHECK (file_type IN ('PDF', 'DOCX', 'PPTX')),
  price NUMERIC(10, 2) NOT NULL,
  preview_pages INTEGER NOT NULL DEFAULT 3,
  status TEXT NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')),
  rejection_reason TEXT,
  ai_summary TEXT,
  watermark_template TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE purchases (
  id TEXT PRIMARY KEY,
  buyer_id TEXT NOT NULL REFERENCES users(id),
  note_id TEXT NOT NULL REFERENCES notes(id),
  amount NUMERIC(10, 2) NOT NULL,
  payment_status TEXT NOT NULL CHECK (payment_status IN ('mock_paid', 'refunded')),
  download_token TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  note_id TEXT NOT NULL REFERENCES notes(id),
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE favorites (
  user_id TEXT NOT NULL REFERENCES users(id),
  note_id TEXT NOT NULL REFERENCES notes(id),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, note_id)
);

CREATE TABLE reports (
  id TEXT PRIMARY KEY,
  reporter_id TEXT NOT NULL REFERENCES users(id),
  note_id TEXT NOT NULL REFERENCES notes(id),
  reason TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('open', 'reviewed', 'closed')),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  university TEXT NOT NULL,
  faculty TEXT NOT NULL,
  department TEXT NOT NULL,
  course TEXT NOT NULL,
  instructor TEXT
);

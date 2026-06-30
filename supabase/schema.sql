create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text unique not null,
  role text not null default 'student' check (role in ('student', 'admin')),
  university text,
  faculty text,
  department text,
  bio text,
  profile_color text,
  avatar_data text,
  email_verified boolean not null default false,
  edu_verified boolean not null default false,
  admin_stats jsonb not null default '{}'::jsonb,
  badge_overrides jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles
drop constraint if exists profiles_email_student_domain;

alter table public.profiles
add constraint profiles_email_student_domain
check (
  (role = 'admin' and lower(email) = 'bdemircanli15@gmail.com')
  or (role <> 'admin' and split_part(email, '@', 2) ~* '(^|\.)edu(\.|$)')
);

create table if not exists public.notes (
  id text primary key,
  seller_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  description text not null,
  university text not null,
  faculty text not null default '',
  department text not null,
  course text not null,
  instructor text not null,
  file_name text not null,
  file_type text not null check (file_type in ('PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'TXT')),
  file_mime text,
  file_path text,
  page_count integer not null default 1,
  selected_preview_pages jsonb not null default '[]'::jsonb,
  price numeric(10, 2) not null check (price >= 0),
  preview_pages integer not null default 3,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  rejection_reason text,
  ai_summary text,
  watermark_template text not null default 'Notum | {buyerName} | {buyerEmail} | {purchaseId}',
  preview jsonb not null default '[]'::jsonb,
  sales integer not null default 0,
  views integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.purchases (
  id text primary key,
  buyer_id uuid not null references public.profiles(id) on delete cascade,
  note_id text not null references public.notes(id) on delete cascade,
  amount numeric(10, 2) not null check (amount >= 0),
  payment_status text not null check (payment_status in ('paid', 'mock_paid', 'refunded')),
  download_token text not null,
  created_at timestamptz not null default now(),
  unique (buyer_id, note_id)
);

create table if not exists public.reviews (
  id text primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  note_id text not null references public.notes(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  comment text not null,
  likes jsonb not null default '[]'::jsonb,
  replies jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.favorites (
  user_id uuid not null references public.profiles(id) on delete cascade,
  note_id text not null references public.notes(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, note_id)
);

create table if not exists public.reports (
  id text primary key,
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  note_id text not null references public.notes(id) on delete cascade,
  reason text not null,
  status text not null default 'open' check (status in ('open', 'reviewed', 'closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.follows (
  follower_id uuid not null references public.profiles(id) on delete cascade,
  following_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id),
  check (follower_id <> following_id)
);

create table if not exists public.categories (
  id text primary key,
  source text,
  source_table text,
  level text,
  program_code text,
  university text not null,
  city text,
  university_type text,
  faculty text not null,
  unit_type text,
  department text not null,
  program text,
  education_type text,
  language text,
  course text,
  instructor text,
  created_at timestamptz not null default now()
);

alter table public.categories add column if not exists source text;
alter table public.categories add column if not exists source_table text;
alter table public.categories add column if not exists level text;
alter table public.categories add column if not exists program_code text;
alter table public.categories add column if not exists city text;
alter table public.categories add column if not exists university_type text;
alter table public.categories add column if not exists unit_type text;
alter table public.categories add column if not exists program text;
alter table public.categories add column if not exists education_type text;
alter table public.categories add column if not exists language text;
alter table public.categories add column if not exists created_at timestamptz not null default now();
alter table public.categories alter column course drop not null;

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
before update on public.profiles
for each row execute function public.touch_updated_at();

drop trigger if exists notes_touch_updated_at on public.notes;
create trigger notes_touch_updated_at
before update on public.notes
for each row execute function public.touch_updated_at();

alter table public.profiles enable row level security;
alter table public.notes enable row level security;
alter table public.purchases enable row level security;
alter table public.reviews enable row level security;
alter table public.favorites enable row level security;
alter table public.reports enable row level security;
alter table public.follows enable row level security;
alter table public.categories enable row level security;

drop policy if exists "profiles are readable" on public.profiles;
create policy "profiles are readable" on public.profiles
for select using (true);

drop policy if exists "users insert own profile" on public.profiles;
create policy "users insert own profile" on public.profiles
for insert with check (id = auth.uid());

drop policy if exists "users update own profile or admins update all" on public.profiles;
create policy "users update own profile or admins update all" on public.profiles
for update using (id = auth.uid() or public.is_admin())
with check (id = auth.uid() or public.is_admin());

drop policy if exists "approved notes are readable" on public.notes;
create policy "approved notes are readable" on public.notes
for select using (status = 'approved' or seller_id = auth.uid() or public.is_admin());

drop policy if exists "verified students create notes" on public.notes;
create policy "verified students create notes" on public.notes
for insert with check (
  seller_id = auth.uid()
  and exists (
    select 1 from public.profiles
    where id = auth.uid()
      and edu_verified = true
  )
);

drop policy if exists "sellers update own pending notes" on public.notes;
create policy "sellers update own pending notes" on public.notes
for update using (seller_id = auth.uid() or public.is_admin())
with check (seller_id = auth.uid() or public.is_admin());

drop policy if exists "sellers delete own notes or admins delete all" on public.notes;
create policy "sellers delete own notes or admins delete all" on public.notes
for delete using (seller_id = auth.uid() or public.is_admin());

drop policy if exists "users read own purchases admins all" on public.purchases;
create policy "users read own purchases admins all" on public.purchases
for select using (buyer_id = auth.uid() or public.is_admin());

drop policy if exists "users create own purchases" on public.purchases;
create policy "users create own purchases" on public.purchases
for insert with check (buyer_id = auth.uid());

drop policy if exists "users read reviews" on public.reviews;
create policy "users read reviews" on public.reviews
for select using (true);

drop policy if exists "buyers create own reviews" on public.reviews;
create policy "buyers create own reviews" on public.reviews
for insert with check (
  user_id = auth.uid()
  and exists (
    select 1 from public.purchases
    where buyer_id = auth.uid()
      and note_id = reviews.note_id
  )
);

drop policy if exists "users update own reviews admins all" on public.reviews;
create policy "users update own reviews admins all" on public.reviews
for update using (user_id = auth.uid() or public.is_admin())
with check (user_id = auth.uid() or public.is_admin());

drop policy if exists "users delete own reviews admins all" on public.reviews;
create policy "users delete own reviews admins all" on public.reviews
for delete using (user_id = auth.uid() or public.is_admin());

drop policy if exists "users read own favorites" on public.favorites;
create policy "users read own favorites" on public.favorites
for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "users manage own favorites insert" on public.favorites;
create policy "users manage own favorites insert" on public.favorites
for insert with check (user_id = auth.uid());

drop policy if exists "users manage own favorites delete" on public.favorites;
create policy "users manage own favorites delete" on public.favorites
for delete using (user_id = auth.uid());

drop policy if exists "users read own reports admins all" on public.reports;
create policy "users read own reports admins all" on public.reports
for select using (reporter_id = auth.uid() or public.is_admin());

drop policy if exists "users create own reports" on public.reports;
create policy "users create own reports" on public.reports
for insert with check (reporter_id = auth.uid());

drop policy if exists "admins update reports" on public.reports;
create policy "admins update reports" on public.reports
for update using (public.is_admin())
with check (public.is_admin());

drop policy if exists "follows are readable" on public.follows;
create policy "follows are readable" on public.follows
for select using (true);

drop policy if exists "users create own follows" on public.follows;
create policy "users create own follows" on public.follows
for insert with check (follower_id = auth.uid());

drop policy if exists "users delete own follows" on public.follows;
create policy "users delete own follows" on public.follows
for delete using (follower_id = auth.uid());

drop policy if exists "categories readable" on public.categories;
create policy "categories readable" on public.categories
for select using (true);

insert into storage.buckets (id, name, public)
values ('note-files', 'note-files', false)
on conflict (id) do nothing;

drop policy if exists "note file owners upload" on storage.objects;
create policy "note file owners upload" on storage.objects
for insert with check (bucket_id = 'note-files' and auth.role() = 'authenticated');

drop policy if exists "note file owners update" on storage.objects;
create policy "note file owners update" on storage.objects
for update using (bucket_id = 'note-files' and auth.role() = 'authenticated');

drop policy if exists "note file owners buyers download" on storage.objects;
create policy "note file owners buyers download" on storage.objects
for select using (
  bucket_id = 'note-files'
  and (
    exists (
      select 1 from public.notes
      where file_path = storage.objects.name
        and seller_id = auth.uid()
    )
    or exists (
      select 1
      from public.notes
      join public.purchases on purchases.note_id = notes.id
      where notes.file_path = storage.objects.name
        and purchases.buyer_id = auth.uid()
    )
    or public.is_admin()
  )
);

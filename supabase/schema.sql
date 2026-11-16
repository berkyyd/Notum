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
  payment_status text not null check (payment_status in ('pending_payment', 'pending_review', 'paid', 'mock_paid', 'rejected', 'refunded')),
  download_token text not null,
  reference_code text,
  receipt_path text,
  receipt_check_status text not null default 'not_checked'
    check (receipt_check_status in ('not_checked', 'matched', 'mismatch', 'unreadable')),
  receipt_detected_reference text,
  receipt_detected_amount numeric(10, 2) check (receipt_detected_amount is null or receipt_detected_amount >= 0),
  receipt_detected_description text,
  is_mock boolean not null default false,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (buyer_id, note_id)
);

alter table public.purchases add column if not exists reference_code text;
alter table public.purchases add column if not exists receipt_path text;
alter table public.purchases add column if not exists receipt_check_status text not null default 'not_checked'
  check (receipt_check_status in ('not_checked', 'matched', 'mismatch', 'unreadable'));
alter table public.purchases add column if not exists receipt_detected_reference text;
alter table public.purchases add column if not exists receipt_detected_amount numeric(10, 2)
  check (receipt_detected_amount is null or receipt_detected_amount >= 0);
alter table public.purchases add column if not exists receipt_detected_description text;
alter table public.purchases add column if not exists is_mock boolean not null default false;
alter table public.purchases add column if not exists reviewed_at timestamptz;
alter table public.purchases add column if not exists query_number text;
alter table public.purchases drop constraint if exists purchases_payment_status_check;
alter table public.purchases add constraint purchases_payment_status_check
check (payment_status in ('pending_payment', 'pending_review', 'paid', 'mock_paid', 'rejected', 'refunded'));
create unique index if not exists purchases_reference_code_unique
on public.purchases (reference_code) where reference_code is not null;
create unique index if not exists purchases_paid_query_number_unique
on public.purchases (query_number) where query_number is not null and payment_status in ('paid', 'mock_paid');

create table if not exists public.seller_payment_profiles (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  bank_name text not null default '',
  iban text not null default '',
  account_holder text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.platform_settings (
  id boolean primary key default true check (id = true),
  bank_name text not null default '',
  iban text not null default '',
  account_holder text not null default '',
  payout_weekday text not null default 'Friday'
    check (payout_weekday in ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')),
  mock_payments_enabled boolean not null default false,
  updated_at timestamptz not null default now()
);

insert into public.platform_settings (id)
values (true)
on conflict (id) do nothing;

create table if not exists public.seller_payouts (
  id text primary key,
  seller_id uuid not null references public.profiles(id) on delete cascade,
  amount numeric(10, 2) not null check (amount > 0),
  purchase_ids jsonb not null default '[]'::jsonb,
  paid_at timestamptz not null default now(),
  admin_note text not null default ''
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

create table if not exists public.legal_acceptances (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  document_key text not null check (document_key in (
    'privacy_notice',
    'terms_of_use',
    'seller_agreement',
    'buyer_preinfo',
    'distance_sale_contract',
    'digital_content_immediate'
  )),
  version text not null,
  accepted_at timestamptz not null default now()
);

create index if not exists legal_acceptances_user_accepted_at_idx
on public.legal_acceptances (user_id, accepted_at desc);

create or replace function public.set_legal_acceptance_server_time()
returns trigger
language plpgsql
as $$
begin
  new.accepted_at = now();
  return new;
end;
$$;

drop trigger if exists legal_acceptances_set_server_time on public.legal_acceptances;
create trigger legal_acceptances_set_server_time
before insert on public.legal_acceptances
for each row execute function public.set_legal_acceptance_server_time();

create or replace function public.capture_signup_legal_acceptances()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if jsonb_typeof(new.raw_user_meta_data -> 'legal_acceptances') = 'array' then
    insert into public.legal_acceptances (user_id, document_key, version, accepted_at)
    select
      new.id,
      item ->> 'document_key',
      item ->> 'version',
      now()
    from jsonb_array_elements(new.raw_user_meta_data -> 'legal_acceptances') as acceptance(item)
    where item ->> 'document_key' in ('privacy_notice', 'terms_of_use')
      and nullif(item ->> 'version', '') is not null;
  end if;
  return new;
end;
$$;

drop trigger if exists auth_users_capture_legal_acceptances on auth.users;
create trigger auth_users_capture_legal_acceptances
after insert on auth.users
for each row execute function public.capture_signup_legal_acceptances();

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

drop trigger if exists seller_payment_profiles_touch_updated_at on public.seller_payment_profiles;
create trigger seller_payment_profiles_touch_updated_at
before update on public.seller_payment_profiles
for each row execute function public.touch_updated_at();

drop trigger if exists platform_settings_touch_updated_at on public.platform_settings;
create trigger platform_settings_touch_updated_at
before update on public.platform_settings
for each row execute function public.touch_updated_at();

alter table public.profiles enable row level security;
alter table public.notes enable row level security;
alter table public.purchases enable row level security;
alter table public.seller_payment_profiles enable row level security;
alter table public.platform_settings enable row level security;
alter table public.seller_payouts enable row level security;
alter table public.reviews enable row level security;
alter table public.favorites enable row level security;
alter table public.reports enable row level security;
alter table public.follows enable row level security;
alter table public.legal_acceptances enable row level security;
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
for insert with check (
  buyer_id = auth.uid()
  and payment_status = 'pending_payment'
  and exists (
    select 1 from public.notes
    where notes.id = purchases.note_id
      and notes.status = 'approved'
      and notes.price = purchases.amount
  )
  and (
    (
      is_mock
      and exists (
        select 1 from public.platform_settings
        where id = true
          and mock_payments_enabled = true
      )
    )
    or (
      not is_mock
      and exists (
        select 1 from public.platform_settings
        where id = true
          and bank_name <> ''
          and iban <> ''
          and account_holder <> ''
      )
    )
  )
);

drop policy if exists "buyers submit own payment receipts" on public.purchases;
create policy "buyers submit own payment receipts" on public.purchases
for update using (
  buyer_id = auth.uid()
  and (
    payment_status in ('pending_payment', 'rejected')
    or (payment_status = 'pending_review' and is_mock = true)
  )
)
with check (
  buyer_id = auth.uid()
  and payment_status = 'pending_review'
);

drop policy if exists "admins review purchases" on public.purchases;
create policy "admins review purchases" on public.purchases
for update using (public.is_admin())
with check (public.is_admin());

drop policy if exists "users read own seller payment details admins all" on public.seller_payment_profiles;
create policy "users read own seller payment details admins all" on public.seller_payment_profiles
for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "users manage own seller payment details" on public.seller_payment_profiles;
create policy "users manage own seller payment details" on public.seller_payment_profiles
for all using (user_id = auth.uid() or public.is_admin())
with check (user_id = auth.uid() or public.is_admin());

drop policy if exists "authenticated read platform payment settings" on public.platform_settings;
create policy "authenticated read platform payment settings" on public.platform_settings
for select to authenticated using (true);

drop policy if exists "admins update platform payment settings" on public.platform_settings;
create policy "admins update platform payment settings" on public.platform_settings
for update using (public.is_admin())
with check (public.is_admin());

drop policy if exists "users read own payouts admins all" on public.seller_payouts;
create policy "users read own payouts admins all" on public.seller_payouts
for select using (seller_id = auth.uid() or public.is_admin());

drop policy if exists "admins create payouts" on public.seller_payouts;
create policy "admins create payouts" on public.seller_payouts
for insert with check (public.is_admin());

create or replace function public.guard_buyer_purchase_receipt_update()
returns trigger
language plpgsql
as $$
begin
  if auth.role() = 'service_role' then
    return new;
  end if;
  if public.is_admin() then
    return new;
  end if;
  if old.buyer_id is distinct from auth.uid()
    or not (
      old.payment_status in ('pending_payment', 'rejected')
      or (old.payment_status = 'pending_review' and old.is_mock = true)
    )
    or new.id is distinct from old.id
    or new.buyer_id is distinct from old.buyer_id
    or new.note_id is distinct from old.note_id
    or new.amount is distinct from old.amount
    or new.reference_code is distinct from old.reference_code
    or new.download_token is distinct from old.download_token
    or new.is_mock is distinct from old.is_mock
    or new.created_at is distinct from old.created_at
    or new.reviewed_at is distinct from old.reviewed_at
    or new.payment_status <> 'pending_review'
    or new.receipt_path is null
    or auth.uid() is null
    or new.receipt_path not like auth.uid()::text || '/' || old.id || '/%'
  then
    raise exception 'Invalid buyer payment receipt update';
  end if;
  return new;
end;
$$;

drop trigger if exists purchases_guard_buyer_receipt_update on public.purchases;
create trigger purchases_guard_buyer_receipt_update
before update on public.purchases
for each row execute function public.guard_buyer_purchase_receipt_update();

create or replace function public.guard_purchase_payment_type()
returns trigger
language plpgsql
as $$
begin
  if old.is_mock is distinct from new.is_mock then
    raise exception 'The mock payment marker cannot be changed';
  end if;
  if (old.is_mock and new.payment_status = 'paid')
    or (not old.is_mock and new.payment_status = 'mock_paid')
  then
    raise exception 'Real and mock payment statuses cannot be interchanged';
  end if;
  return new;
end;
$$;

drop trigger if exists purchases_guard_payment_type on public.purchases;
create trigger purchases_guard_payment_type
before update on public.purchases
for each row execute function public.guard_purchase_payment_type();

create or replace function public.record_seller_payout(p_seller_id uuid, p_purchase_ids text[])
returns public.seller_payouts
language plpgsql
security definer
set search_path = public
as $$
declare
  purchase_count integer;
  payout_amount numeric(10, 2);
  payout public.seller_payouts;
begin
  if not public.is_admin() then
    raise exception 'Only admins can record seller payouts';
  end if;
  if p_purchase_ids is null or cardinality(p_purchase_ids) = 0 then
    raise exception 'No eligible purchases supplied';
  end if;

  perform purchases.id
  from public.purchases
  join public.notes on notes.id = purchases.note_id
  where purchases.id = any(p_purchase_ids)
    and notes.seller_id = p_seller_id
    and purchases.payment_status = 'paid'
  for update of purchases;

  select count(*), round(coalesce(sum(purchases.amount * 0.80), 0), 2)
  into purchase_count, payout_amount
  from public.purchases
  join public.notes on notes.id = purchases.note_id
  where purchases.id = any(p_purchase_ids)
    and notes.seller_id = p_seller_id
    and purchases.payment_status = 'paid'
    and not exists (
      select 1
      from public.seller_payouts
      where seller_id = p_seller_id
        and purchase_ids ? purchases.id
    );

  if purchase_count <> cardinality(p_purchase_ids) then
    raise exception 'Some purchases are not eligible or have already been paid out';
  end if;

  insert into public.seller_payouts (id, seller_id, amount, purchase_ids)
  values ('pay-' || gen_random_uuid()::text, p_seller_id, payout_amount, to_jsonb(p_purchase_ids))
  returning * into payout;
  return payout;
end;
$$;

revoke all on function public.record_seller_payout(uuid, text[]) from public;
grant execute on function public.record_seller_payout(uuid, text[]) to authenticated;

create or replace function public.update_note_sales_after_payment()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.payment_status in ('paid', 'mock_paid')
    and old.payment_status not in ('paid', 'mock_paid')
  then
    update public.notes
    set sales = sales + 1
    where id = new.note_id;
  end if;
  return new;
end;
$$;

drop trigger if exists purchases_update_note_sales on public.purchases;
create trigger purchases_update_note_sales
after update of payment_status on public.purchases
for each row execute function public.update_note_sales_after_payment();

update public.notes
set sales = greatest(
  notes.sales,
  coalesce(confirmed.sales_count, 0)
)
from (
  select note_id, count(*)::integer as sales_count
  from public.purchases
  where payment_status in ('paid', 'mock_paid')
  group by note_id
) as confirmed
where notes.id = confirmed.note_id;

create or replace view public.seller_sales_summary
with (security_barrier = true)
as
select
  notes.seller_id,
  notes.id as note_id,
  count(*)::integer as sales_count,
  coalesce(sum(purchases.amount), 0)::numeric(10, 2) as gross_sales,
  coalesce(sum(
    case when not exists (
      select 1
      from public.seller_payouts
      where seller_payouts.seller_id = notes.seller_id
        and seller_payouts.purchase_ids ? purchases.id
    ) then purchases.amount * 0.80 else 0 end
  ), 0)::numeric(10, 2) as due_amount
from public.notes
join public.purchases on purchases.note_id = notes.id
where purchases.payment_status in ('paid', 'mock_paid')
  and (notes.seller_id = auth.uid() or public.is_admin())
group by notes.seller_id, notes.id;

grant select on public.seller_sales_summary to authenticated;

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
      and payment_status in ('paid', 'mock_paid')
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

drop policy if exists "users and admins read legal acceptances" on public.legal_acceptances;
create policy "users and admins read legal acceptances" on public.legal_acceptances
for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "users insert own legal acceptances" on public.legal_acceptances;
create policy "users insert own legal acceptances" on public.legal_acceptances
for insert with check (user_id = auth.uid());

drop policy if exists "categories readable" on public.categories;
create policy "categories readable" on public.categories
for select using (true);

insert into storage.buckets (id, name, public)
values ('note-files', 'note-files', false)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'payment-receipts',
  'payment-receipts',
  false,
  8388608,
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set public = false,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "buyers upload own payment receipts" on storage.objects;
create policy "buyers upload own payment receipts" on storage.objects
for insert to authenticated with check (
  bucket_id = 'payment-receipts'
  and (storage.foldername(name))[1] = auth.uid()::text
  and exists (
    select 1 from public.purchases
    where id = (storage.foldername(name))[2]
      and buyer_id = auth.uid()
      and (
        payment_status in ('pending_payment', 'rejected')
        or (payment_status = 'pending_review' and is_mock = true)
      )
  )
);

drop policy if exists "buyers clean up own unsubmitted payment receipts" on storage.objects;
create policy "buyers clean up own unsubmitted payment receipts" on storage.objects
for delete to authenticated using (
  bucket_id = 'payment-receipts'
  and (storage.foldername(name))[1] = auth.uid()::text
  and exists (
    select 1 from public.purchases
    where id = (storage.foldername(name))[2]
      and buyer_id = auth.uid()
      and (
        payment_status in ('pending_payment', 'rejected')
        or (payment_status = 'pending_review' and is_mock = true)
      )
  )
);

drop policy if exists "buyers and admins read payment receipts" on storage.objects;
create policy "buyers and admins read payment receipts" on storage.objects
for select to authenticated using (
  bucket_id = 'payment-receipts'
  and (
    (storage.foldername(name))[1] = auth.uid()::text
    or public.is_admin()
  )
);

drop policy if exists "note file owners upload" on storage.objects;
create policy "note file owners upload" on storage.objects
for insert with check (
  bucket_id = 'note-files'
  and auth.role() = 'authenticated'
  and exists (
    select 1 from public.profiles
    where id = auth.uid()
      and edu_verified = true
  )
);

drop policy if exists "note file owners update" on storage.objects;
create policy "note file owners update" on storage.objects
for update
using (
  bucket_id = 'note-files'
  and owner_id = auth.uid()::text
  and exists (
    select 1 from public.profiles
    where id = auth.uid()
      and edu_verified = true
  )
)
with check (
  bucket_id = 'note-files'
  and owner_id = auth.uid()::text
  and exists (
    select 1 from public.profiles
    where id = auth.uid()
      and edu_verified = true
  )
);

drop policy if exists "note file owners delete" on storage.objects;
create policy "note file owners delete" on storage.objects
for delete using (
  bucket_id = 'note-files'
  and owner_id = auth.uid()::text
  and exists (
    select 1 from public.profiles
    where id = auth.uid()
      and edu_verified = true
  )
);

drop policy if exists "note file owners buyers download" on storage.objects;
create policy "note file owners buyers download" on storage.objects
for select using (
  bucket_id = 'note-files'
  and (
    (
      owner_id = auth.uid()::text
      and exists (
        select 1 from public.profiles
        where id = auth.uid()
          and edu_verified = true
      )
    )
    or
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
        and purchases.payment_status in ('paid', 'mock_paid')
    )
    or public.is_admin()
  )
);


-- Users
create table users (
  id uuid primary key,
  role text,
  status text
);
-- Properties
create table properties (
  id uuid primary key,
  fingerprint text unique,
  status text
);
-- Listings
create table listings (
  id uuid primary key,
  property_id uuid references properties(id),
  status text
);
-- Professionals
create table professionals (
  id uuid primary key,
  user_id uuid,
  status text
);

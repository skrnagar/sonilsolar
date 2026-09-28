create extension if not exists pgcrypto;

create type public.content_status as enum ('draft', 'fact_check', 'seo_review', 'aeo_review', 'human_approval', 'published', 'updated', 'archived');
create type public.lead_stage as enum ('new', 'contacted', 'qualified', 'site_survey_scheduled', 'site_survey_completed', 'proposal_sent', 'negotiation', 'won', 'lost', 'follow_up');

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  city text not null,
  pincode text not null,
  property_type text,
  electricity_bill text,
  objective text,
  system_preference text,
  consultation_preference text,
  estimated_kw numeric,
  project_range text,
  stage public.lead_stage not null default 'new',
  source_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.locations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  city text not null,
  district text,
  state text not null,
  pincodes text[] default '{}',
  latitude numeric,
  longitude numeric,
  discom text,
  service_available boolean not null default false,
  office_available boolean not null default false,
  local_introduction text,
  solar_context text,
  service_areas text[] default '{}',
  pricing jsonb default '{}',
  subsidy jsonb default '{}',
  faqs jsonb default '[]',
  seo_title text,
  meta_description text,
  quality_score smallint check (quality_score between 0 and 90),
  status public.content_status not null default 'draft',
  last_verified_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  location_id uuid references public.locations(id),
  capacity_kw numeric,
  customer_segment text,
  system_type text,
  panel_technology text,
  inverter text,
  installation_date date,
  annual_generation_kwh numeric,
  bill_before numeric,
  bill_after numeric,
  challenge text,
  solution text,
  result text,
  testimonial text,
  image_paths text[] default '{}',
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now()
);

create table public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  body jsonb not null default '{}',
  category text,
  author_id uuid references auth.users(id),
  reviewer_id uuid references auth.users(id),
  source_links jsonb not null default '[]',
  faqs jsonb not null default '[]',
  seo_title text,
  meta_description text,
  status public.content_status not null default 'draft',
  published_at timestamptz,
  last_verified_at date,
  updated_at timestamptz not null default now()
);

create table public.audit_logs (
  id bigint generated always as identity primary key,
  actor_id uuid references auth.users(id),
  action text not null,
  entity_type text not null,
  entity_id text not null,
  changes jsonb,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
alter table public.locations enable row level security;
alter table public.projects enable row level security;
alter table public.articles enable row level security;
alter table public.audit_logs enable row level security;

create policy "published locations are public" on public.locations for select using (status in ('published', 'updated'));
create policy "published projects are public" on public.projects for select using (status in ('published', 'updated'));
create policy "published articles are public" on public.articles for select using (status in ('published', 'updated'));

-- Leads are intentionally server-only. The service-role key bypasses RLS.
-- Add authenticated admin policies after connecting the chosen identity provider
-- and assigning admin claims. Never expose the service-role key to the browser.

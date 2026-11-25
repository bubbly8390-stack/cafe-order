-- 오즈 카페의 orders 표 — Supabase SQL Editor에 통째로 붙여 넣고 Run

-- 1. 표 만들기 : 주문 하나가 한 줄, 줄마다 주문한 사람(user_id)
create table public.orders (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  items text[] not null,              -- 담은 메뉴 이름들(글 배열)
  total integer not null,             -- 합계(원)
  created_at timestamptz not null default now()
);

-- 2. 로그인한 사람에게 읽기 · 넣기 · 지우기만 — 주문은 고치지 않음
grant select, insert, delete on table public.orders to authenticated;

-- 3. 행 보안 켜기
alter table public.orders enable row level security;

-- 4. 정책 : 요청한 사람의 id와 그 줄의 user_id가 같을 때만
create policy "내 주문 읽기" on public.orders
  for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "내 주문 넣기" on public.orders
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "내 주문 취소" on public.orders
  for delete to authenticated
  using ((select auth.uid()) = user_id);

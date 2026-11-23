import { createClient } from "@supabase/supabase-js";

// Connect 창의 Project URL과 Publishable key — 값은 .env.local에
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// 로그인은 supabase.auth, 주문 표는 supabase.from으로
export const supabase = TODO 1(supabaseUrl, supabasePublishableKey);

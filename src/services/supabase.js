import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rjedtakvjvkuljbnmskx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZWR0YWt2anZrdWxqYm5tc2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNTcxNTYsImV4cCI6MjAyNzYzMzE1Nn0.6VEuuBFbT-po6SdFWWeEybBjxx6o5t7MM5IrbBxhcC8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

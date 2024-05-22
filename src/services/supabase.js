import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lcyrxbkposlpbhcsgcom.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjeXJ4Ymtwb3NscGJoY3NnY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3NzIyODEsImV4cCI6MjAxMTM0ODI4MX0.MLqTsnAeou8q4cdeLSy_SiQotokNLW3ZD8WKKpjQb2M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

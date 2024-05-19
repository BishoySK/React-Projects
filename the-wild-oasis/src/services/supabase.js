import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://utojoxjrluucvjenakto.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0b2pveGpybHV1Y3ZqZW5ha3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NzQ5MjAsImV4cCI6MjAyODQ1MDkyMH0.snyT9byHgJ0Y5HSvY1xmoyG8mz_2T1CuC0J4PpQEjzc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

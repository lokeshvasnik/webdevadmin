import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bcrrzrjlwxgolregcvam.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcnJ6cmpsd3hnb2xyZWdjdmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3NzE1MTIsImV4cCI6MjAxMjM0NzUxMn0.VCDeWtnexvn-02coBOt8SI8V1Dta8CuykiMrt8wHPrk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

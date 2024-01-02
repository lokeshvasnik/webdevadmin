import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bcrrzrjlwxgolregcvam.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE;

if (!supabaseKey) {
  throw new Error(
    "SUPABASE key is not defined. Please set the environment variable.",
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

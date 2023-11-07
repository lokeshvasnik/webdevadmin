import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bcrrzrjlwxgolregcvam.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE;

if (!supabaseKey) {
    throw new Error(
        "SUPABASE key is not defined. Please set the environment variable."
    );
}

console.log(supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

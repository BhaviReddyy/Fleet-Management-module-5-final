import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
export const supabase = createClient(
    Process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);
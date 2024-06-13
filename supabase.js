import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto"

const supabaseUrl = "https://sgfaxhymuidibrskzuap.supabase.co"

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnZmF4aHltdWlkaWJyc2t6dWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4NTg1MzksImV4cCI6MjAzMjQzNDUzOX0.6vbe0oQHi0Hd6oK_voIEKhfTdF1GBFw__D_xgoHE4a0"

export const supabase = createClient(supabaseUrl,supabaseAnonKey)


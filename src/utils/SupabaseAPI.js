import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wlcwonwprftismlrkejl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsY3dvbndwcmZ0aXNtbHJrZWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1ODkyNTQsImV4cCI6MjAwODE2NTI1NH0.Y0DVWsZF8xCmH53A1QcPQFLIb_ihE6wVJ9F9YtbGh-A"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
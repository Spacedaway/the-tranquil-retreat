import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pksarxjxhbyvkfakdvyd.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrc2FyeGp4aGJ5dmtmYWtkdnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1Nzk1OTcsImV4cCI6MjAyMzE1NTU5N30.JNNsoXLdt5VWJ5JIAxhTaxpqYv1JkwqCW4KmvsKsihY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

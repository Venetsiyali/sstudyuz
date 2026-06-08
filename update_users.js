require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  await supabase.from('users').update({ email: 'admin@mtalim.uz' }).eq('id', 'admin-001');
  await supabase.from('users').update({ email: 'talaba@mtalim.uz' }).eq('id', 'student-001');
  console.log('Demo user emails updated successfully to @mtalim.uz');
}
run();

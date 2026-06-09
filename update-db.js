require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function formatTitle(title) {
  if (!title) return title;
  let res = title.toLowerCase();
  res = res.charAt(0).toUpperCase() + res.slice(1);
  
  res = res.replace(/\bai\b/ig, "AI");
  res = res.replace(/\biot\b/ig, "IoT");
  res = res.replace(/\bvr\b/ig, "VR");
  res = res.replace(/\bar\b/ig, "AR");
  res = res.replace(/\bmr\b/ig, "MR");
  
  res = res.replace(/\. \s*([a-z])/g, (match, p1) => {
    return '. ' + p1.toUpperCase();
  });

  return res;
}

async function updateDb() {
  const { data: lessons, error } = await supabase.from('lessons').select('*');
  if (error) {
    console.error("Error fetching lessons", error);
    return;
  }

  for (const lesson of lessons) {
    const newTitle = formatTitle(lesson.title);
    if (newTitle !== lesson.title) {
      console.log(`Updating "${lesson.title}" -> "${newTitle}"`);
      await supabase.from('lessons').update({ title: newTitle }).eq('id', lesson.id);
    }
  }
  console.log("Database update complete");
}

updateDb();

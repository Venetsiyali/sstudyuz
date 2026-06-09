require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const updates = [
    { topic: 1, url: 'https://www.youtube.com/embed/g2CusMllYXw' },
    { topic: 2, url: 'https://www.youtube.com/embed/Cdn0KouyutE' },
    { topic: 4, url: 'https://www.youtube.com/embed/YyNHJKjHxfk' },
    { topic: 5, url: 'https://www.youtube.com/embed/eEkqiITGORs' }
  ];

  for (const item of updates) {
    console.log(`Updating video for topic ${item.topic}...`);
    const { error } = await supabase.from('lessons').update({ video_url: item.url }).eq('topic_number', item.topic);
    if (error) console.error(error);
  }
  
  console.log('Videos updated successfully!');
}

run();

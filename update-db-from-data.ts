import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { LESSONS } from './lib/data.js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function updateDb() {
  console.log(`Starting to update ${LESSONS.length} lessons in Supabase...`);
  for (const lesson of LESSONS) {
    console.log(`Updating lesson ${lesson.topicNumber}...`);
    const { error } = await supabase.from('lessons')
      .update({
        title: lesson.title,
        description: lesson.description,
        lecture_text: lesson.lectureText
      })
      .eq('topic_number', lesson.topicNumber);

    if (error) {
      console.error(`Error updating lesson ${lesson.topicNumber}:`, error);
    }
  }
  console.log('Finished updating database!');
}

updateDb();

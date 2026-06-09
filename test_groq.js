require('dotenv').config({ path: '.env.local' });
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getModels() {
  try {
    const models = await groq.models.list();
    console.log(models.data.map(m => m.id).join(', '));
  } catch (err) {
    console.error(err.message);
  }
}

getModels();

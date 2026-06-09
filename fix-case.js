const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib/data.ts');
let content = fs.readFileSync(filePath, 'utf8');

function formatTitle(title) {
  // if title has multiple sentences (like separated by dot), we should capitalize first letter of each sentence, but the user explicitly said "faqat birinchi so'z kotta xarf bilan boshlansin qolgani kichikda". 
  // We'll just lowercase everything, then uppercase the very first letter.
  // Wait, if it's "IoT" or "AI", lowercase will break it.
  // But wait, user said "xamma so'zlarni masalan Raqamli Texnologiyalar va Innovatsiyalar bo'lsa bu yerda faqat Raqamli kotta xarf bilan boshlansin qolganlari kichik xarfda yoziladi innovatsiyalar bo'lib... xammma xammmasi shu qoida bo'yicha bo'lsin".
  // Let's just do an exact match replace for the specific ones they mentioned to be safe, or just lowercase the whole title and uppercase the first letter, keeping AI/IoT/VR intact if possible by replacing them back.

  let res = title.toLowerCase();
  res = res.charAt(0).toUpperCase() + res.slice(1);
  
  // Restore acronyms
  res = res.replace(/\bai\b/ig, "AI");
  res = res.replace(/\biot\b/ig, "IoT");
  res = res.replace(/\bvr\b/ig, "VR");
  res = res.replace(/\bar\b/ig, "AR");
  res = res.replace(/\bmr\b/ig, "MR");
  
  // Fix sentence case after a dot
  res = res.replace(/\. \s*([a-z])/g, (match, p1) => {
    return '. ' + p1.toUpperCase();
  });

  return res;
}

content = content.replace(/title:\s*(["'])(.*?)\1/g, (match, quote, titleText) => {
  return `title: ${quote}${formatTitle(titleText)}${quote}`;
});

// Fix COURSE_DATA title too if not matched above
// Actually the regex above handles both `title: '...'` and `title: "..."`.

// Let's also fix the markdown headers in the last lesson if it's uppercase
content = content.replace(/# YAKUNIY SERTIFIKATLASH LOYIHASI TOPSHIRIG'I/g, "# Yakuniy sertifikatlash loyihasi topshirig'i");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed capitalization in lib/data.ts');

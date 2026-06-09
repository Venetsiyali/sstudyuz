const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Replace curly apostrophes and backticks used as tutuq belgisi
      // e.g., "ta’lim" -> "ta'lim", "o`zbek" -> "o'zbek"
      // We only target these characters when they are surrounded by letters
      content = content.replace(/([a-zA-Z])([‘’`])([a-zA-Z])/g, "$1'$3");
      
      // Also catch "M-ta’lim" or similar where there might be a hyphen
      content = content.replace(/([a-zA-Z])-([a-zA-Z])([‘’`])([a-zA-Z])/g, "$1-$2'$4");
      
      // General replacement for specific common words just in case regex misses
      content = content.replace(/ta’lim/gi, "ta'lim");
      content = content.replace(/ta`lim/gi, "ta'lim");
      content = content.replace(/o`rganish/gi, "o'rganish");
      content = content.replace(/o’rganish/gi, "o'rganish");
      content = content.replace(/o`zbek/gi, "o'zbek");
      content = content.replace(/o’zbek/gi, "o'zbek");
      content = content.replace(/ma`ruza/gi, "ma'ruza");
      content = content.replace(/ma’ruza/gi, "ma'ruza");
      content = content.replace(/san`at/gi, "san'at");
      content = content.replace(/san’at/gi, "san'at");
      content = content.replace(/ta`sir/gi, "ta'sir");
      content = content.replace(/ta’sir/gi, "ta'sir");
      content = content.replace(/ma`lumot/gi, "ma'lumot");
      content = content.replace(/ma’lumot/gi, "ma'lumot");
      content = content.replace(/sun`iy/gi, "sun'iy");
      content = content.replace(/sun’iy/gi, "sun'iy");

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed apostrophes in ${fullPath}`);
      }
    }
  }
}

processDirectory('./app');
processDirectory('./components');
processDirectory('./lib');
console.log('Done fixing apostrophes!');

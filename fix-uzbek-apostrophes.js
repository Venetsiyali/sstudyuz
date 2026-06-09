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
      
      // We will match ANY kind of apostrophe between letters: straight ', backtick `, curly ’, curly ‘
      const regexAllApostrophes = /([a-zA-Z])(['`’‘])([a-zA-Z])/g;
      
      content = content.replace(regexAllApostrophes, (match, p1, p2, p3) => {
        const lowerP1 = p1.toLowerCase();
        // If the preceding letter is O or G, it is the letters O' or G' (O‘ or G‘)
        if (lowerP1 === 'o' || lowerP1 === 'g') {
          return `${p1}‘${p3}`;
        }
        // Otherwise, it is a tutuq belgisi, so use ’
        else {
          return `${p1}’${p3}`;
        }
      });
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Applied official Uzbek typography to ${fullPath}`);
      }
    }
  }
}

processDirectory('./app');
processDirectory('./components');
processDirectory('./lib');
console.log('Done applying official Uzbek typography!');

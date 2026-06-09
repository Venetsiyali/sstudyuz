const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /bg-\[#1B4332\]/g, replacement: 'bg-primary' },
  { regex: /text-\[#1B4332\]/g, replacement: 'text-primary' },
  { regex: /border-\[#1B4332\]/g, replacement: 'border-primary' },
  { regex: /ring-\[#1B4332\]/g, replacement: 'ring-primary' },
  
  { regex: /bg-\[#B8860B\]/g, replacement: 'bg-accent-copper' },
  { regex: /text-\[#B8860B\]/g, replacement: 'text-accent-copper' },
  { regex: /border-\[#B8860B\]/g, replacement: 'border-accent-copper' },
  
  { regex: /text-\[#27AE60\]/g, replacement: 'text-emerald-600' },
  { regex: /bg-\[#27AE60\]/g, replacement: 'bg-emerald-600' },
  { regex: /border-\[#27AE60\]/g, replacement: 'border-emerald-600' },
  
  { regex: /text-\[#D4A520\]/g, replacement: 'text-accent-copper-light' },
  { regex: /bg-\[#D4A520\]/g, replacement: 'bg-accent-copper-light' },
  { regex: /border-\[#D4A520\]/g, replacement: 'border-accent-copper-light' },

  { regex: /text-\[#1A5276\]/g, replacement: 'text-blue-600' },
  { regex: /bg-\[#1A5276\]/g, replacement: 'bg-blue-600' },
  { regex: /border-\[#1A5276\]/g, replacement: 'border-blue-600' },

  // Profile specific custom hex colors that need to adapt (except inside the certificate canvas where it uses style={{}})
  // We won't touch style={{}} here, just class names.
  { regex: /text-\[#1a1a1a\]/gi, replacement: 'text-text-primary' },
  { regex: /text-\[#666\]/gi, replacement: 'text-text-secondary' },
  { regex: /text-\[#999\]/gi, replacement: 'text-text-muted' },
  { regex: /text-\[#bbb\]/gi, replacement: 'text-text-muted' },
  { regex: /text-\[#333\]/gi, replacement: 'text-text-secondary' },
  { regex: /bg-\[#333\]/gi, replacement: 'bg-border' },
];

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
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory('./app');
processDirectory('./components');
console.log('Done!');

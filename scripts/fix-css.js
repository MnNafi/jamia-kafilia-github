const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'app', 'globals.output.css');

try {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace HTML entity &#x27; with single quote '
  const updatedContent = content.replace(/&#x27;/g, "'");

  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Successfully updated ${filePath}`);
} catch (error) {
  console.error('Error updating CSS file:', error);
  process.exit(1);
}

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("Setting up environment files...");

// Find all .env.template files in the repository
const findCommand = 'find . -name ".env.template"';
const templateFiles = execSync(findCommand, { encoding: "utf8" })
  .trim()
  .split("\n");

templateFiles.forEach((templateFile) => {
  if (!templateFile) return;

  const dir = path.dirname(templateFile);
  const localFile = path.join(dir, ".env.local");

  // Check if .env.local already exists
  if (fs.existsSync(localFile)) {
    console.log(`⚠️  ${localFile} already exists, skipping...`);
  } else {
    // Copy the template to .env.local
    fs.copyFileSync(templateFile, localFile);
    console.log(`✅ Created ${localFile}`);
  }
});

console.log("Environment setup complete!");

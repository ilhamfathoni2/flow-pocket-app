const fs = require("fs");
const path = require("path");

const env = process.argv[2] || "dev";

const sourceFile = path.join(__dirname, "env", env, `api.${env}.ts`);
const targetFile = path.join(__dirname, "env", "api.ts");

if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`✅ API environment using: ${env}`);
} else {
    console.error(`❌ API config not found: ${sourceFile}`);
    process.exit(1);
}

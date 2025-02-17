const fs = require("fs");
const path = require("path");

const env = process.argv[2] || "prod";
const apkDir = env === "prod" ? "release" : "debug";

const apkPath = path.join(
    __dirname,
    "android",
    "app",
    "build",
    "outputs",
    "apk",
    apkDir,
    `app-${apkDir}.apk`
);

const outputPath = path.join(__dirname, "build-app", `app-${env}.apk`);

if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

if (fs.existsSync(apkPath)) {
    fs.copyFileSync(apkPath, outputPath);
    console.log(`✅ APK success build in: ${outputPath}`);
} else {
    console.error(`❌ APK not found: ${apkPath}`);
}

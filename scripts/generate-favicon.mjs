import sharp from "sharp";
import fs from "node:fs";

const candidates = [
  "public/favicon-source.png",
  "public/favicon.png",
  "src/assets/logo-jm-elec.png",
];
const input = candidates.find((file) => fs.existsSync(file));

if (!input) {
  throw new Error("No favicon source file found.");
}
const background = { r: 250, g: 249, b: 246, alpha: 1 };

await sharp(input)
  .resize(16, 16, { fit: "cover", background })
  .png()
  .toFile("public/favicon-16x16.png");

await sharp(input)
  .resize(32, 32, { fit: "cover", background })
  .png()
  .toFile("public/favicon-32x32.png");

await sharp(input)
  .resize(180, 180, { fit: "cover", background })
  .png()
  .toFile("public/apple-touch-icon.png");

console.log(`Favicon files generated from: ${input}`);

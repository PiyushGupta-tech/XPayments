const sharp = require("sharp");
const path = require("path");

const inputPath = path.join(__dirname, "../public/logo.png");
const outputPath = path.join(__dirname, "../public/logo.png");

async function removeWhiteBackground() {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const threshold = 250; // pixels with R,G,B all above this become transparent

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= threshold && g >= threshold && b >= threshold) {
      data[i + 3] = 0; // set alpha to 0 for white pixels
    }
  }

  await sharp(Buffer.from(data), {
    raw: { width, height, channels: 4 },
  })
    .png()
    .toFile(outputPath);

  console.log("Logo background removed. Saved to", outputPath);
}

removeWhiteBackground().catch(console.error);

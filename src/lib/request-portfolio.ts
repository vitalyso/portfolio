import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const dataFolder = path.join(process.cwd(), "src/data/portfolio");
const imagesFolder = path.join(process.cwd(), "public/portfolio");

const readImages = async (id: string) => {
  const imagesPath = path.join(imagesFolder, id);
  const images = await fs.readdir(imagesPath);

  const result = images
    .filter((name) => /\d+\.(png|jpe?g|webp)/.test(name))
    .map(async (name) => {
      const filePath = path.join(imagesPath, name);
      const metadata = await sharp(filePath).metadata();
      const src = `/portfolio/${id}/${name}`;

      return {
        src,
        width: metadata.width,
        height: metadata.height,
        blurDataURL: `/_next/image?url=${src}&w=8&q=70`,
        blurWidth: 8,
        blurHeight: 4,
      };
    });

  return Promise.all(result);
};

const readData = async (id: string) => {
  const projectFile = path.join(dataFolder, `${id}.json`);
  const dataString = await fs.readFile(projectFile, "utf-8");

  return JSON.parse(dataString);
};

export async function requestPortfolio(projectId: string) {
  const data = await readData(projectId);
  const images = await readImages(projectId);

  return { id: projectId, images, ...data };
}
export async function requestPortfolioList() {
  const files = await fs.readdir(dataFolder);
  return await Promise.all(
    files.map(async (file) => {
      const data = await readData(file.replace(/\.json$/, ""));
      return { id: file.replace(/\.json$/, ""), ...data };
    }),
  );
}

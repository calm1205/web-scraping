import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "node:path";
import { fileURLToPath } from "url";
import { scraping } from "./sites/googleMap/index.js";
import { apis } from "./preload.mjs";

const createWindow = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },
  });

  // トランスパイル後のpathを指定
  window.loadFile("dist/index.html");
};

app.on("ready", () => {
  ipcMain.handle(apis.scraping, () => scraping);
  createWindow();
});

console.log("start electron!");

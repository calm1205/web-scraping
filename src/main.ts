import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "node:path";
import { fileURLToPath } from "url";
import { scraping } from "./";

const createWindow = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // トランスパイル後のpathを指定
  window.loadFile("dist/index.html");
};

app.on("ready", () => {
  ipcMain.handle("scraping", async () => await scraping("企業", false));
  createWindow();
});

console.log("start electron!");

import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // トランスパイル後のpathを指定
  window.loadFile("dist/index.html");
};

app.whenReady().then(createWindow);

console.log("hello electron!");

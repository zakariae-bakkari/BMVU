const { app, BrowserWindow, screen, ipcMain } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;
  const iconPath = path.resolve(__dirname, "bootstrap copy/assets/images/icon.png");

  console.log("Icon path:", iconPath);

  const mainWindow = new BrowserWindow({
    width: width - 60,
    minWidth: 1200,
    height: height - 20,
    minHeight: 625,
    autoHideMenuBar: true,
    icon: iconPath,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true, 
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("src/bootstrap copy/home.html");

  ipcMain.on("open-about-window", () => {
    const aboutWindow = new BrowserWindow({
      width: width - 100,
      minWidth: 1200,
      height: height - 20,
      minHeight: 625,
      autoHideMenuBar: true,
      icon: iconPath,
      resizable: true,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
        contextIsolation: true,
        enableRemoteModule: false,
        nodeIntegration: true,
      },
    });

    aboutWindow.loadFile("src/bootstrap copy/about.html"); // Update the path accordingly
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

const { app, BrowserWindow } = require("electron");

const url = require("url");

const path = require("path");

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Electron",
    width: 1000,
    height: 600,
  });

  // mainWindow.webContents.openDevTools();

  // const startUrl = url.format({
  //   pathname: path.join(__dirname, "./app/build/index.html"),
  //   protocol: "file",
  // });

  mainWindow.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  createMainWindow();
});

const { ipcRenderer } = require("electron");

function handleAbout() {
  ipcRenderer.send("open-about-window");
}

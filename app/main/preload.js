const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // App info
  getVersion: () => ipcRenderer.invoke('app-version'),
  
  // App controls
  restartApp: () => ipcRenderer.invoke('restart-app'),
  
  // Window controls
  minimize: () => ipcRenderer.invoke('window-minimize'),
  maximize: () => ipcRenderer.invoke('window-maximize'),
  close: () => ipcRenderer.invoke('window-close'),
  
  // BMVU specific functionality
  playSound: (soundPath) => ipcRenderer.invoke('play-sound', soundPath),
  
  // Development helpers
  isDev: () => process.env.NODE_ENV === 'development',
  
  // Platform info
  platform: process.platform
});

// Expose a limited set of Node.js functionality
contextBridge.exposeInMainWorld('nodeAPI', {
  platform: process.platform,
  version: process.version
});
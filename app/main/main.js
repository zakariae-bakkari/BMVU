const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1000,
    minHeight: 700,
    icon: path.join(__dirname, '../renderer/assets/images/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    show: false, // Don't show until ready
    titleBarStyle: 'default',
    autoHideMenuBar: false
  });

  // Load the BMVU simulation page directly
  mainWindow.loadFile(path.join(__dirname, '../renderer/pages/bmvu.html'));

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    
    // Focus the window
    if (mainWindow) {
      mainWindow.focus();
    }
  });

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Set up the menu
  createMenu();

  // Development mode
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

function createMenu() {
  const template = [
    {
      label: 'Fichier',
      submenu: [
        {
          label: 'Nouvelle Simulation',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            mainWindow.webContents.reload();
          }
        },
        {
          label: 'Redémarrer',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            mainWindow.webContents.reload();
          }
        },
        { type: 'separator' },
        {
          label: 'Quitter',
          accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Affichage',
      submenu: [
        {
          label: 'Plein écran',
          accelerator: 'F11',
          click: () => {
            const isFullscreen = mainWindow.isFullScreen();
            mainWindow.setFullScreen(!isFullscreen);
          }
        },
        {
          label: 'Zoom +',
          accelerator: 'CmdOrCtrl+Plus',
          click: () => {
            const currentZoom = mainWindow.webContents.getZoomLevel();
            mainWindow.webContents.setZoomLevel(currentZoom + 0.5);
          }
        },
        {
          label: 'Zoom -',
          accelerator: 'CmdOrCtrl+-',
          click: () => {
            const currentZoom = mainWindow.webContents.getZoomLevel();
            mainWindow.webContents.setZoomLevel(currentZoom - 0.5);
          }
        },
        {
          label: 'Zoom par défaut',
          accelerator: 'CmdOrCtrl+0',
          click: () => {
            mainWindow.webContents.setZoomLevel(0);
          }
        },
        { type: 'separator' },
        {
          label: 'Outils de développement',
          accelerator: 'F12',
          click: () => {
            mainWindow.webContents.toggleDevTools();
          }
        }
      ]
    },
    {
      label: 'BMVU',
      submenu: [
        {
          label: 'Guide d\'utilisation',
          click: () => {
            // Show help dialog
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'Guide BMVU',
              message: 'Guide d\'utilisation BMVU',
              detail: 'Raccourcis clavier:\n\nGare A:\nCtrl+T: Test\nCtrl+S: Sémaphore\nCtrl+B: Blocage\n\nGare B:\nAlt+T: Test\nAlt+S: Sémaphore\nAlt+B: Blocage\n\nGénéral:\nF: Plein écran\nR: Redémarrer'
            });
          }
        },
        {
          label: 'À propos',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'À propos de BMVU',
              message: 'BMVU - Block Manuel de Voie Unique',
              detail: 'Simulation développée par Zakariae Bakkari\nStage à ONCF AGDAL - Rabat\nEST - École Supérieure de Technologie\n\nVersion 1.0.0'
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// App event handlers
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  // On macOS, keep app running even when all windows are closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, re-create window when dock icon is clicked
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers for renderer communication
ipcMain.handle('app-version', () => {
  return app.getVersion();
});

ipcMain.handle('restart-app', () => {
  app.relaunch();
  app.exit();
});

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, navigationUrl) => {
    event.preventDefault();
  });
});
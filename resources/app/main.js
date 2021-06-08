const {app, BrowserWindow} = require('electron');
const Menu = require('electron').Menu
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600, resizable: false});
  mainWindow.loadFile('index.html');
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

function createMenu() {
  const application = {
    label: "Application",
    submenu: [{
      label: "Thème",
      accelerator: "",
      click: () => { mainWindow.webContents.send('ShowMyModal')}
    }, 
    {
      label: "Quit",
      accelerator: "Command+Q",
      click: () => {app.quit()}
    }
    ]
  }

  const template = [
    application
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.on('ready', function () {
  createWindow();
  createMenu();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});

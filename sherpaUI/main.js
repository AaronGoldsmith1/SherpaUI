const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const dialog = require('electron').dialog;
const Menu = require('electron').Menu;
const shell = require('electron').shell;
const exec = require('child_process').exec;
const fs = require('fs-extra');
const defaultMenu = require('electron-default-menu');

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const menu = defaultMenu(app, shell);

  menu.splice(4, 0, {
    label: 'Custom',
    submenu: [
      {
        label: 'Export Project to Desktop',
        click: (item, focusedWindow) => {
          dialog.showMessageBox({
            type: "question",
            message: 'Export to Desktop?',
            buttons: ['OK']
          }, function() {
            exec("cd starterReactVR && npm run bundle")
            console.log('exporting to desktop')
          })
        }
      }
    ]
  })

  exec('node starterReactVR/node_modules/react-native/local-cli/cli.js start')
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  });

  setTimeout(function() {
    mainWindow.loadURL('file://' + __dirname + '/index.html');
  }, 500)

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

'use strict';

const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;

// 是否debug状态
let isDevelopment = false;

if (isDevelopment) {
    require('electron-reload')(__dirname, {
        ignored: /node_modules|[\/\\]\./
    });
}


var mainWnd = null;

function createMainWnd() {
    mainWnd = new BrowserWindow({
        width: 800,
        height: 600,
        ico: 'public/img/logo.png'
    });

    if (isDevelopment) {
        mainWnd.webContents.openDevTools();
    }

    mainWnd.loadURL(`file://${__dirname}/main.html`);

    initMenus();

    mainWnd.on('closed', () => {
       mainWnd = null;
    });
}

function initMenus() {
    var template = [{
      label: 'Electrons',
      submenu: [
        {
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          role: 'services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          role: 'hide'
        },
        {
          role: 'hideothers'
        },
        {
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          role: 'quit'
        }
      ]
    },{
        label: 'Edits',
        submenu: [
            {
                label: 'e1111'
            },
            {
                label: 'e222'
            }
        ]
    }];
    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}


app.on('ready', createMainWnd);

app.on('window-all-closed', () => {
    app.quit();
});

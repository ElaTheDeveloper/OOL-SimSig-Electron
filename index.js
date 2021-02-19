const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1100,
    height: 720,
    title: "Railway Operating Centre",
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://roc.onourlines.co.uk')
  //win.setTitle("Railway Operating Centre")
  win.removeMenu()
  win.on('page-title-updated', (evt) => {
    evt.preventDefault();
  });
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
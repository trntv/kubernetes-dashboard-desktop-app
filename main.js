const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");
const childProcess = require("child_process");

function createWindow () {
    const binPath = path.join(__dirname, "dist/amd64 bin/dashboard")
    childProcess.exec(`"${binPath}" --kubeconfig ~/.kube/config`, (error, stdout, stderr) => {
        console.log(stdout, stderr, error)
    })

    // Create the browser window.
    let win = new BrowserWindow({
        width: 1280,
        height: 1024,
        icon: path.join(__dirname, 'dist/electron/assets/images/kubernetes-logo.png'),
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `dist/electron/index.html`),
            protocol: "file:",
            slashes: true
        })
    ).catch((e) => {
        console.log(e)
    });
    win.webContents.openDevTools()

    win.on('closed', function () {
        win = null
    })
}

app.whenReady().then(createWindow)

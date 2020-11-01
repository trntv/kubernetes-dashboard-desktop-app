const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");
const childProcess = require("child_process");

let debug = process.argv.includes("--debug")

function runBackend () {
    const binPath = path.join(__dirname, 'amd64/dashboard')
    childProcess.exec(`"${binPath}" --kubeconfig ~/.kube/config`, (error, stdout, stderr) => {
        if (error) {
            console.error(error, stderr)
        }
    })
}

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 1280,
        height: 1024,
        icon: path.join(__dirname, 'assets/kubernetes-logo.png'),
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'frontend/index.html'),
            protocol: "file:",
            slashes: true
        })
    ).catch((e) => {
        console.log(e)
    });

    if (debug) {
        win.webContents.openDevTools()
    }

    win.on('closed', function () {
        win = null
    })
}

runBackend()

setTimeout(() => {app.whenReady().then(createWindow)}, 1000)




const { app, dialog, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");
const childProcess = require("child_process");
const http = require("http");

let debug = process.argv.includes("--debug")

function runBackend () {
    console.debug("starting backend...")
    const binPath = path.join(__dirname, 'amd64/dashboard')
    childProcess.exec(`"${binPath}" --kubeconfig ~/.kube/config`, (error, stdout, stderr) => {
        if (error) {
            console.error(error, stderr)
            throw error
        }
    })
}

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        show: false,
        icon: path.join(__dirname, 'assets/kubernetes-logo.png'),
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.maximize();
    
    // and load the index.html of the app.
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'frontend/index.html'),
            protocol: "file:",
            slashes: true
        })
    ).catch((error) => {
        console.log(error)
    });

    if (debug) {
        win.webContents.openDevTools()
    }
    
    win.show()
    win.focus()
    
    win.on('closed', function () {
        win = null
    })
}

try {
    runBackend()
    runFrontend()
} catch (error) {
    console.error(error)
    dialog.showMessageBoxSync(error);
    app.exit(error.code || 1)
}

function runFrontend() {
    http.get("http://127.0.0.1:9090/", () => {
        app.whenReady().then(createWindow)
    }).on('error', () => setTimeout(runFrontend, 400))
}




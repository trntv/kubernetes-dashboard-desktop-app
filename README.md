# Kubernetes Dashboard desktop app (unofficial)
It's an attempt to pack official [kubernetes dashboard](https://github.com/kubernetes/dashboard) in a single desktop app using [Electron](https://www.electronjs.org/)

The project is still in the PoC stage as I'm looking for the best way to add needed modifications to the base app without changing its source code.

![Kubernetes Dashboard Desktop App](screenshot.png?raw=true "Kubernetes Dashboard Desktop App")

## Build & Run
```
npm install
npm run build
npm start
```

## MacOS installation
```
brew tap trntv/kubernetes-dashboard-desktop-app
brew install --cask trntv/kubernetes-dashboard-desktop-app/kubernetes-dashboard-desktop-app
```

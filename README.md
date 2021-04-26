# Kubernetes Dashboard desktop app (unofficial)
It's an attempt to pack official [kubernetes dashboard](https://github.com/kubernetes/dashboard) in a single desktop app using [Electron](https://www.electronjs.org/)

The project is still in the PoC stage as I'm looking for the best way to add needed modifications to the base app without changing its source code.

![Kubernetes Dashboard Desktop App](screenshot.png?raw=true "Kubernetes Dashboard Desktop App")

## Requirements
1. `KUBECONFIG` should be configured
2. Context to desired cluster should be set

## MacOS installation
```
brew tap trntv/kubernetes-dashboard-desktop-app
brew install --cask trntv/kubernetes-dashboard-desktop-app/kubernetes-dashboard-desktop-app
```

## Build & Run from sources
clone
```
git clone kubernetes-dashboard-desktop-app
cd kubernetes-dashboard-desktop-app
```
run with [taskctl](https://github.com/taskctl/taskctl)
```
taskctl start
```
or run with [npm](https://npmjs.org)
```
npm install
npm --prefix src/renderer ci
npm run build:backend
npm run build:frontend
```

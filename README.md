# Kubernetes Dashboard desktop app (unofficial)
It's an attempt to pack official [kubernetes dashboard](https://github.com/kubernetes/dashboard) in a single desktop app using [Electron](https://www.electronjs.org/)

The project is still in the PoC stage as I'm looking for the best way to add needed modifications to the base app without changing its source code.

![Kubernetes Dashboard Desktop App](screenshot.png?raw=true "Kubernetes Dashboard Desktop App")

## Requirements
1. `.kube/config` should exist and configured
2. context to desired cluster should be set

## MacOS installation
```
brew tap trntv/kubernetes-dashboard-desktop-app
brew install --cask trntv/kubernetes-dashboard-desktop-app/kubernetes-dashboard-desktop-app
```
then navigate to `System Preferences` -> `Security & Privacy` and allow `Kubernetes Dashboard.app`

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
npm --prefix apps/electron install
npm --prefix apps/renderer ci --ignore-scripts
npm --prefix apps/renderer run version
npm --prefix apps/renderer run build:frontend
npm --prefix apps/renderer run build:backend
npm --prefix apps/electron run build
npm --prefix apps/electron run start
```

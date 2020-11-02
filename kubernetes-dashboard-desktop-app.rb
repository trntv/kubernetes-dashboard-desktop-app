cask "kubernetes-dashboard-desktop-app" do
  version "2.0.4"
  sha256 "e1e95d2641bb12f332a8a79f99b00ff3918276b246aa931f4232143d8b3762f3"
  url "https://github.com/trntv/kubernetes-dashboard-desktop-app/releases/download/v#{version}/Kubernetes.Dashboard.dmg"
  name "Kubernetes Dashboard"
  desc "Kubernetes Dashboard desktop App (Unofficial)"
  homepage "https://github.com/trntv/kubernetes-dashboard-desktop-app"

  app "Kubernetes Dashboard.app"
end

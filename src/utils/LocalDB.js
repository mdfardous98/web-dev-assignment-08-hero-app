export const addInstalledApp = () => {
  const data = localStorage.getItem("installedApps");
  return data ? JSON.parse(data) : [];
};

export const saveInstalledApp = (app) => {
  const installedApps = addInstalledApp();
  const isDuplicate = installedApps.some((p) => p.id === app.id);
  if (isDuplicate) return alert("App is already installed");
  const updateInstalledAppList = [...installedApps, app];
  localStorage.setItem("installedApps", JSON.stringify(updateInstalledAppList));
};

export const unInstallAppList = (id) => {
  const installedApps = addInstalledApp();
  const updateInstalledAppList = installedApps.filter((p) => p.id !== id);
  localStorage.setItem("installedApps", JSON.stringify(updateInstalledAppList));
};

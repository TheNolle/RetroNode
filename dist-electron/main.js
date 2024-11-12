import { ipcMain, app, BrowserWindow } from "electron";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { exec } from "child_process";
let mainWindow$1;
const loadIPC = (window) => mainWindow$1 = window;
ipcMain.on("toolbar", (_, type) => {
  switch (type) {
    case "minimize": {
      mainWindow$1 == null ? void 0 : mainWindow$1.minimize();
      break;
    }
    case "maximize": {
      (mainWindow$1 == null ? void 0 : mainWindow$1.isMaximized()) ? mainWindow$1.unmaximize() : mainWindow$1 == null ? void 0 : mainWindow$1.maximize();
      break;
    }
    case "close": {
      mainWindow$1 == null ? void 0 : mainWindow$1.close();
      break;
    }
  }
});
ipcMain.on("toggleMute", (event) => {
  const toggleMute = () => {
    return new Promise((resolve, reject) => {
      const platform = process.platform;
      let command = "";
      if (platform === "win32") {
        command = "nircmd.exe mutesysvolume 2";
      } else if (platform === "darwin") {
        command = 'osascript -e "set volume output muted not (output muted of (get volume settings))"';
      } else if (platform === "linux") {
        command = "amixer -D pulse set Master 1+ toggle";
      }
      exec(command, (error) => {
        if (error) {
          console.error(error);
          reject(false);
        } else {
          resolve(true);
        }
      });
    });
  };
  toggleMute().then((result) => event.returnValue = result).catch(() => event.returnValue = false);
});
ipcMain.on("getBatteryPercentage", (event) => {
  const getBatteryPercentage = () => {
    return new Promise((resolve, reject) => {
      const platform = process.platform;
      let command = "";
      if (platform === "win32") {
        command = "WMIC Path Win32_Battery Get EstimatedChargeRemaining";
      } else if (platform === "darwin") {
        command = 'pmset -g batt | grep -o "[0-9]*%" | tr -d "%"';
      } else if (platform === "linux") {
        command = "upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep percentage | awk '{print $2}'";
      }
      exec(command, (error, stdout) => {
        if (error) {
          console.error(error);
          reject(0);
        } else {
          resolve(parseInt(stdout.trim()));
        }
      });
    });
  };
  getBatteryPercentage().then((result) => event.returnValue = result).catch(() => event.returnValue = 0);
});
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.resolve(path.resolve(__dirname, ".."), "dist-electron");
const RENDERER_DIST = path.resolve(path.resolve(__dirname, ".."), "dist");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.resolve(__dirname, "..", "public") : RENDERER_DIST;
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    title: "RetroNode",
    icon: path.resolve(__dirname, "..", "public", "icon.png"),
    center: true,
    darkTheme: true,
    width: 1080,
    height: 720,
    minWidth: 1080,
    minHeight: 720,
    frame: false,
    show: false,
    titleBarStyle: "hidden",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.resolve(__dirname, "preload.mjs"),
      devTools: process.env.NODE_ENV === "development"
    }
  });
  if (VITE_DEV_SERVER_URL) mainWindow.loadURL(VITE_DEV_SERVER_URL);
  else mainWindow.loadFile(path.resolve(RENDERER_DIST, "index.html"));
  mainWindow.setMenu(null);
  mainWindow.on("ready-to-show", () => mainWindow == null ? void 0 : mainWindow.show());
  mainWindow.on("closed", () => mainWindow = null);
  if (process.env.NODE_ENV === "development") mainWindow.webContents.openDevTools();
  loadIPC(mainWindow);
}
app.on("window-all-closed", () => process.platform !== "darwin" && app.quit() && (mainWindow = null));
app.on("activate", () => BrowserWindow.getAllWindows().length === 0 && createWindow());
app.whenReady().then(createWindow);
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};

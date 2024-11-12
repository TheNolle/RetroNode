"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("utils", {
  toolbar: (type) => electron.ipcRenderer.send("toolbar", type),
  toggleMute: () => electron.ipcRenderer.sendSync("toggleMute"),
  getBatteryPercentage: () => electron.ipcRenderer.sendSync("getBatteryPercentage")
});

import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('utils', {
  toolbar: (type: 'minimize' | 'maximize' | 'close') => ipcRenderer.send('toolbar', type),
  toggleMute: () => ipcRenderer.sendSync('toggleMute'),
  getBatteryPercentage: () => ipcRenderer.sendSync('getBatteryPercentage'),
})

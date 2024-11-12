import { app, BrowserWindow } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import loadIPC from './ipc'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.resolve(path.resolve(__dirname, '..'), 'dist-electron')
export const RENDERER_DIST = path.resolve(path.resolve(__dirname, '..'), 'dist')

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.resolve(__dirname, '..', 'public') : RENDERER_DIST

let mainWindow: BrowserWindow | null

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'RetroNode',
    icon: path.resolve(__dirname, '..', 'public', 'icon.png'),

    center: true,
    darkTheme: true,

    width: 1080,
    height: 720,
    minWidth: 1080,
    minHeight: 720,

    frame: false,
    show: false,
    titleBarStyle: 'hidden',

    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.resolve(__dirname, 'preload.mjs'),
      devTools: process.env.NODE_ENV === 'development',
    },
  })

  if (VITE_DEV_SERVER_URL) mainWindow.loadURL(VITE_DEV_SERVER_URL)
  else mainWindow.loadFile(path.resolve(RENDERER_DIST, 'index.html'))

  mainWindow.setMenu(null)
  mainWindow.on('ready-to-show', () => mainWindow?.show())
  mainWindow.on('closed', () => (mainWindow = null))

  if (process.env.NODE_ENV === 'development') mainWindow.webContents.openDevTools()

  loadIPC(mainWindow)
}

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit() && (mainWindow = null))
app.on('activate', () => BrowserWindow.getAllWindows().length === 0 && createWindow())
app.whenReady().then(createWindow)

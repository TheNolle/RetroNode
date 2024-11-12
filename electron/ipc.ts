import { BrowserWindow, ipcMain } from 'electron'
import { exec } from 'child_process'

let mainWindow: BrowserWindow | null
const loadIPC = (window: BrowserWindow) => mainWindow = window
export default loadIPC

ipcMain.on('toolbar', (_, type: 'minimize' | 'maximize' | 'close'): void => {
	switch (type) {
		case 'minimize': {
			mainWindow?.minimize()
			break
		}
		case 'maximize': {
			mainWindow?.isMaximized() ? mainWindow.unmaximize() : mainWindow?.maximize()
			break
		}
		case 'close': {
			mainWindow?.close()
			break
		}
	}
})

ipcMain.on('toggleMute', (event): void => {
	const toggleMute = (): Promise<boolean> => {
		return new Promise((resolve, reject) => {
			const platform = process.platform
			let command = ''

			if (platform === 'win32') {
				command = 'nircmd.exe mutesysvolume 2'
			} else if (platform === 'darwin') {
				command = 'osascript -e "set volume output muted not (output muted of (get volume settings))"'
			} else if (platform === 'linux') {
				command = 'amixer -D pulse set Master 1+ toggle'
			}

			exec(command, (error) => {
				if (error) {
					console.error(error)
					reject(false)
				} else {
					resolve(true)
				}
			})
		})
	}

	toggleMute().then(result => event.returnValue = result).catch(() => event.returnValue = false)
})

ipcMain.on('getBatteryPercentage', (event): void => {
	const getBatteryPercentage = (): Promise<number> => {
		return new Promise((resolve, reject) => {
			const platform = process.platform
			let command = ''

			if (platform === 'win32') {
				command = 'WMIC Path Win32_Battery Get EstimatedChargeRemaining'
			} else if (platform === 'darwin') {
				command = 'pmset -g batt | grep -o "[0-9]*%" | tr -d "%"'
			} else if (platform === 'linux') {
				command = 'upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep percentage | awk \'{print $2}\''
			}

			exec(command, (error, stdout) => {
				if (error) {
					console.error(error)
					reject(0)
				} else {
					resolve(parseInt(stdout.trim()))
				}
			})
		})
	}

	getBatteryPercentage().then(result => event.returnValue = result).catch(() => event.returnValue = 0)
})

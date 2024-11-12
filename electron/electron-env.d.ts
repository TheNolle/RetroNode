/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_PUBLIC: string
  }
}

interface Window {
  utils: {
    toolbar: (type: 'minimize' | 'maximize' | 'close') => void
    toggleMute: () => boolean
    getBatteryPercentage: () => number
  }
}

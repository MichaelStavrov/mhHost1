export {}

declare global {
  interface Window {
    mfApp1Url: string
  }
}

window.mfApp1Url = 'http://localhost:3001'

import('./bootstrap')

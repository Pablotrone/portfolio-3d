// Подавляем Mozilla deprecation warnings
const originalWarn = console.warn
console.warn = (...args) => {
  const message = args[0]
  if (typeof message === 'string' && 
      (message.includes('mozPressure') || message.includes('mozInputSource'))) {
    return // Игнорируем Mozilla warnings
  }
  originalWarn.apply(console, args)
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

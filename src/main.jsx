import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider
    maxSnack={1}
    preventDuplicate
    autoHideDuration={2000}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </SnackbarProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/AppRouter/AppRouter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
        <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);

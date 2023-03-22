import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import makeServer from "./server";

if (
  process.env.NODE_ENV === "development" &&
  typeof makeServer === "function"
) {
  makeServer(); // For people following the tutorial
} else if (
  process.env.NODE_ENV === "production" ||
  process.env.REACT_APP_DEMO
) {
  makeServer(); // For a live demo when deploying to Vercel
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "core-js";
import AuthProvider from './store/provider/AuthProvider'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)

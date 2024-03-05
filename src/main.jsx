import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
//import Home from './pages/Home';
import Header from './common/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header/>
    <h1>Home Page</h1> */}
    <App/>
    
  </React.StrictMode>,
)

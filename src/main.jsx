import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import PlantasProv from './context/PlantasProv.jsx';

// import Pizzacontext from "./context/Pizzacontext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
      <PlantasProv>
        <App />
      </PlantasProv>
    </BrowserRouter>
  </React.StrictMode>,
)

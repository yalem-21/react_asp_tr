import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from "react-router-dom";
//import App from './App.jsx'
import Ecx from './Ecx.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <StrictMode>
        <Ecx />
      </StrictMode>,
    </BrowserRouter>
)

import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {SubProductContextProvider} from "./context/SubproductContext";

createRoot(document.getElementById('root')!).render(
    <SubProductContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </SubProductContextProvider>
)

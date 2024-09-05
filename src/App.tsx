import './App.scss'
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import React from "react";
import KomatsuModel from "./components/KomatsuModel";
import SideNavbar from "./components/SideNavbar";

const App:React.FC = () => {

    return (
        <div className="komatsu-project">
            <SideNavbar/>
            <Routes>
                <Route path='/' element={<KomatsuModel/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    )
}

export default App;

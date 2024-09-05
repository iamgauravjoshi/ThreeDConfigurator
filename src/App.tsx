import './App.scss'
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LayoutTemplate from "./template/LayoutTemplate";
import React from "react";
import KomatsuModel from "./components/KomatsuModel";

const App:React.FC = () => {

    return (
        <div className="komatsu-project">
            <LayoutTemplate/>
            <Routes>
                <Route path='/' element={<KomatsuModel/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    )
}

export default App;

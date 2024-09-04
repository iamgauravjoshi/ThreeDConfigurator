import * as React from "react";
import './App.scss'
import {Route, Routes} from "react-router-dom";
import ThreeDConfigurator from "./components/ThreeDConfigurator";
import SkidSteerModel from "./components/SkidSteerModel";
import SideNavbar from "./components/SideNavbar";
import ErrorPage from "./pages/ErrorPage";
import LayoutTemplate from "./template/LayoutTemplate";

function App() {
    return (
        <div className="komatsu-project">
            <Routes>
                <Route path='/' element={<LayoutTemplate/>}>
                    <Route path='/' element={<ThreeDConfigurator/>}/>
                    <Route path='dump-truck' element={<ThreeDConfigurator/>}/>
                    {/*<Route path='/model' element={<div>Gaurav Joshi</div>}/>*/}
                    <Route path='skid-steer' element={<SkidSteerModel/>}/>
                    {/*<Route path='/' element={<h1 className={'text-3xl font-bold underline'}>Gaurav Joshi</h1>}/>*/}
                </Route>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>

    )
}

export default App

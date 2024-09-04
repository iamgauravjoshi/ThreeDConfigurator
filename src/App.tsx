import './App.scss'
import {Route, Routes} from "react-router-dom";
import ThreeDConfigurator from "./components/ThreeDConfigurator";
import SkidSteerModel from "./components/SkidSteerModel";
import ErrorPage from "./pages/ErrorPage";
import LayoutTemplate from "./template/LayoutTemplate";

function App() {
    return (
        <div className="komatsu-project">
            <Routes>
                <Route path='/' element={<LayoutTemplate/>}>
                    <Route path='/' element={<ThreeDConfigurator/>}/>
                    <Route path='/dump-truck' element={<ThreeDConfigurator/>}/>
                    <Route path='/skid-steer' element={<SkidSteerModel/>}/>
                </Route>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>

    )
}

export default App

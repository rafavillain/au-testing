import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./Layout";
import Uikit from "./Uikit"
import Home from "./Home"

import "./App.scss"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/uikit" element={<Uikit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
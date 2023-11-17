import { Routes, Route } from "react-router-dom"
import Register from "./Register.jsx"
import Login from "./Login.jsx"
import Home from "./Home.jsx"
import Postv2 from "./Postv2.jsx"
import View from "./View.jsx"

export default function App () {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Register />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/post" element={<Postv2 />}/>
                    <Route path="/view/:id" element={<View />}/>
                </Routes>
            </div>
        </>
    );
}
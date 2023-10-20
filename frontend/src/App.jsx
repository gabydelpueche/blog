import { Routes, Route } from "react-router-dom"
import Post from "./Post.jsx"
import Register from "./Register.jsx"
import Login from "./Login.jsx"
import Home from "./Home.jsx"

export default function App () {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Register />}/>
                    <Route path="/post" element={<Post />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/home" element={<Home />}/>
                </Routes>
            </div>
        </>
    );
}
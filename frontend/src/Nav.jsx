import "./assets/output.css"
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export default function Navbar() {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const verifyCookie = async () => {
            if(!cookies.token){
                navigate('/login');
            };
            
            const { data } = await axios.post(
                'http://localhost:3000/home', {}, { withCredentials: true }
            );

            const { status, user } = data;
            setUsername(user);
            return status
                ? toast(`Hello ${user}`, {
                    position: 'top-right',
                })
                : (removeCookie('token'), navigate('/login'));
        };
        verifyCookie();
    }, [cookies, navigate, removeCookie]);

    const logOut = () => {
        removeCookie('token');
        navigate('/register');
    };

    return (
        <>
            <header className="antialiased">
                <nav className="bg-transparent z-10 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center">
                        {/* Logo, Name, and Home page link */}
                        <div className="flex justify-start items-center">
                            <NavLink to="/home" className="flex mr-4">
                                <img src="https://cdn3.iconfinder.com/data/icons/medical-and-science/64/Heartbeat_Pulse-512.png" className="mr-3 h-8" alt="FlowBite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">RunwayRevive</span>
                            </NavLink>
                        </div>
                        {/* Upload Post */}
                        <div className="flex items-center justify-end">
                            <NavLink to="/post">
                                <button type="submit" className="self-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
                                    Upload Post
                                </button>
                            </NavLink>
                            {/* added stuff+ */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">{username}</span>
                            <button onClick={logOut} className="self-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
                                    Logout
                            </button>
                        </div>
                        <ToastContainer />
                    </div>
                </nav>
            </header>
            {/* Flowbite Script */}
            <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
        </>
    )
}
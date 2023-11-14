import "./assets/output.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {

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
                        </div>
                    </div>
                </nav>
            </header>
            {/* Flowbite Script */}
            <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
        </>
    )
}
import { NavLink , useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export default function Login(){
    const [log, setLog] = useState({username:"", password:""})
    const navigate = useNavigate()

    const detectChange = e =>{
        setLog({...log, [e.target.name]:e.target.value});
        console.log(log);
    }

    const handleErr = err => 
    toast.error(err, {
        position: 'bottom-left',
    });
    const handleSuccess = msg => 
    toast.success(msg, {
        position: 'bottom-left',
    });

    const disabledButton = log.username.trim() === '' || log.password.trim() === '';

    const findUser = async (e) =>{
        e.preventDefault()

        try {
            const { data } = await axios.post(
                'http://localhost:3000/login', {...log}, {withCredentials: true }
            );
            const { success, message } = data;
            if(success){
                handleSuccess(message);
                setTimeout(() => navigate('/home'), 1000);
            } else{
                handleErr(message);
            };

            // fetch(`http://localhost:3000/findUser/${log.username}/${log.password}`)
            //     .then(res => res.json)
            //     .then(data => {
            //         console.log(data);
            //         // localStorage.setItem('user', JSON.stringify({username:"john"}));
            //         navigate('/home')
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     });
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <>
              <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {/* Logo */}
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://cdn3.iconfinder.com/data/icons/medical-and-science/64/Heartbeat_Pulse-512.png" alt="logo"/>
                            Runway Revive
                    </div>
                    {/* Login Container */}
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form onSubmit={findUser} className="space-y-4 md:space-y-6" action="http://localhost:3000/createUser" method="post">
                                {/* Username */}
                                <div>
                                    <label  for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input onChange={detectChange} value={username} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="username123" required=""/>
                                </div>
                                {/* Password */}
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={detectChange} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" required=""/>
                                </div>
                                {/* Submit */}
                                <button disabled={disabledButton} type="submit" className="mt-6 w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Login</button>
                                {/* Redirect to Register page */}
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account? <NavLink to="/" className="font-medium text-red-600 hover:underline dark:text-red-500">Register here</NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}
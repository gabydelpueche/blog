import { NavLink , useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export default function Register() {
    const [user, setUser] = useState({email: "", username: "", password:""})
    const navigate = useNavigate()

    const detectChange = e =>{
        setUser({...user, [e.target.name]:e.target.value});
        console.log(user);
    }

    const handleErr = err => 
    toast.error(err, {
        position: 'bottom-left',
    });
    const handleSuccess = msg => 
    toast.success(msg, {
        position: 'bottom-left',
    });

    const disabledButton = user.username.trim() === '' || user.password.trim() === '' || user.email.trim() === '';

    const addUser = async (e) =>{
        e.preventDefault()

        try {
            const { data } = await axios.post(
                'http://localhost:3000', {...user}, {withCredentials: true }
            );
            console.log(data)
            const { success, message, error } = data;
            if(success){
                handleSuccess(message);
                setTimeout(() => navigate('/home'), 1000);
            } else{
                if (error && error.username) {
                    // Handle validation error for the username field
                    handleErr(`Username error: ${error.username}`);
                } else {
                    // Handle other errors
                    handleErr(message || 'Failed to sign up');
                }
            };

            // setUser(user)
            // fetch("http://localhost:3000/createUser", {
            //     method: "POST",
            //     headers: { 
            //         "Content-Type": "application/json" 
            //     }, 
            //     body: JSON.stringify(user) 
            // })
            //     .then(res => res.json())
            //     .then(data => console.log(data))

            //     navigate('/login');

        } catch (err) {
            console.error(err)
        }

        setUser(user)
    }
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {/* Logo */}
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://cdn3.iconfinder.com/data/icons/medical-and-science/64/Heartbeat_Pulse-512.png" alt="logo"/>
                            Runway Revive
                    </div>
                    {/* Register container */}
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={addUser}>
                                {/* email */}
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input onChange={detectChange} value={user.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="example@email.com" required=""/>
                                </div>
                                {/* username */}
                                <div>
                                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                                    <input onChange={detectChange} value={user.username} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="username123" required=""/>
                                </div>
                                {/* password */}
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={detectChange} value={user.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" required=""/>
                                </div>
                                {/* confirm password */}
                                <div>
                                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" required=""/>
                                </div>
                                {/* terms and conditions */}
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-red-600 hover:underline dark:text-red-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                {/* submit */}
                                <button disabled={disabledButton} type="submit" className="mt-6 w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Create an account</button>
                                {/* redirect to Login page */}
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <NavLink to="/login" className="font-medium text-red-600 hover:underline dark:text-red-500">Login here</NavLink>
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
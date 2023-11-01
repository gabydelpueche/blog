import Navbar from "./Nav.jsx"
import { useState, useEffect } from 'react';

export default function Home(){
    const [posts, setPosts] = useState([{}])

    useEffect(() => {
        fetch('http://localhost:3000/getPost')
            .then(res => res.json())
            .then(data => {
                console.log(posts)
                setPosts(data)
            }) 
            .catch(err => console.error(err))    
    }, []);

    return (
    <>
        <Navbar />
        <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
            <p className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                RunwayRevive
            </p>
            <p className="text-lg text-gray-600">
                Where Style Meets Spotlight
            </p>
        </div>
        </header>

        <div className="bg-gray-100 w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Designers</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Runway</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Trending</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Accessories</a>
        </div>        {
        posts.map(post => (
            <>
        <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            <div className="p-5">
                <img src={post.image}/>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.content}</p>
            </div>
        </div>
        </>
        ))}
    </>
    )
}
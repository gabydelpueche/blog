import Navbar from "./Nav.jsx"
import Footer from "./Footer.jsx"
import { useState, useEffect } from 'react';

export default function Home() {
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

            <section class="bg-cover bg-center bg-no-repeat bg-[url('https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/21043-topshot-shutterstock_426539566.jpg?itok=Tv5fGGYz')] bg-gray-500 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">RunwayRevive</h1>
                    <p class="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">Where Style Meets Spotlight</p>
                </div>
            </section>


            <figure class="max-w-screen-md mx-auto text-center">
                <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"One doesn't want fashion to look ridiculous, silly, or out of step with the times - but you do want designers that make you think, that make you look at fashion differently. That's how fashion changes. If it doesn't change, it's not looking forward."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://hips.hearstapps.com/hmg-prod/images/anna-wintour-1.jpg?crop=0.816xw:0.816xh;0.0749xw,0&resize=1200:*" alt="profile picture"/>
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Anna Wintour</cite>
                            <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">British Editor</cite>
                        </div>
                </figcaption>
            </figure>


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
                                <img src={post.image} />
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.content}</p>
                            </div>
                        </div>
                    </>
                ))}
            <Footer />
        </>
    )
}
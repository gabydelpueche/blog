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
        <div className="bg-gray-100 dark:bg-slate-600">
            <Navbar />

            <section className="bg-cover bg-center bg-no-repeat bg-[url('https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/21043-topshot-shutterstock_426539566.jpg?itok=Tv5fGGYz')] bg-gray-500 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">RunwayRevive</h1>
                    <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">Where Style Meets Spotlight</p>
                </div>
            </section>


            <figure className="p-10 max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"One doesn't want fashion to look ridiculous, silly, or out of step with the times - but you do want designers that make you think, that make you look at fashion differently. That's how fashion changes. If it doesn't change, it's not looking forward."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://hips.hearstapps.com/hmg-prod/images/anna-wintour-1.jpg?crop=0.816xw:0.816xh;0.0749xw,0&resize=1200:*" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">Anna Wintour</cite>
                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">British Editor</cite>
                    </div>
                </figcaption>
            </figure>


            <div className="bg-gray-100 dark:bg-slate-600 dark:text-white w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <a href="#" className="hover:bg-gray-400 dark:hover:bg-red-400 rounded py-2 px-4 mx-2">Designers</a>
                <a href="#" className="hover:bg-gray-400 dark:hover:bg-red-400 rounded py-2 px-4 mx-2">Runway</a>
                <a href="#" className="hover:bg-gray-400 dark:hover:bg-red-400 rounded py-2 px-4 mx-2">Trending</a>
                <a href="#" className="hover:bg-gray-400 dark:hover:bg-red-400 rounded py-2 px-4 mx-2">Accessories</a>
            </div>
            <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-4 mb-10 p-3">       {
                posts.map(post => (
                    <>
                        <article className="w-auto p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800">
                                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    {post.category}
                                </span>
                                <span className="text-sm">14 days ago</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{post.title}</a></h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400 truncate">{post.content}</p>
                            <div className="flex justify-between items-center">
                                {/* Person who posted */}
                                {/* <div className="flex items-center space-x-4">
                                <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                <span className="font-medium dark:text-white">
                                    Jese Leos
                                </span>
                            </div> */}
                                <button type="button" data-modal-target="readMore" data-modal-toggle="readMore" className="inline-flex items-center font-medium text-red-600 dark:text-red-500 hover:underline">
                                    Read more
                                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </article >
                        {/* <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            <div className="p-5">
                                <img src={post.image} />
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.content}</p>
                            </div>
                        </div> */}
                    </>
                ))}
            </div>
            {/* Read More Pop Up */}
            <div id="readMore" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                </div>
            </div>

            <iframe className="w-full aspect-video z-0" src="https://www.youtube.com/embed/XpRzg2Zkqy0?si=Oo2EqoGVYXn2z6CZ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <Footer />
        </div >
    )
}
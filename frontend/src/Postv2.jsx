import { useState, useEffect } from 'react';
import React from 'react';
import Select from 'react-select';
import Navbar from "./Nav.jsx";
import Footer from "./Footer.jsx"
import {Cloudinary} from "@cloudinary/url-gen";
import Upload from "./Upload.jsx";

export default function Postv2() {
    // Cloudinary
    const [publicId, setpublicId] = useState('');
    const [cloudname] = useState('dvrpl7d8p');
    const [uploadPreset] = useState('ml_default');
    const [uwConfig] = useState({cloudname, uploadPreset});

    const cld = new Cloudinary({
        cloud: {cloudName: cloudname}
    });

    const image = cld.image(publicId);

    // Detecting post
    const [post, setPost] = useState({ category: "", title: "", description: "", content: "", image: "" });

    const detectChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
        console.log(post)
    };

    const detectSelect = (e) => {
        setPost({ ...post, category: e.value })
        console.log(post)
    };

    const detectImage = (e) => {
        setPost({ ...post, image: URL.createObjectURL(e.target.files[0]) })
    }

    // Upload post to database
    const postBlog = (e) => {
        e.preventDefault();
        try {
            setPost(post)
            fetch("http://localhost:3000/createPost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        } catch (err) {
            console.error(err)
        }
    }

    // Select options
    const options = [
        { value: 'designers', label: 'Designers' },
        { value: 'runway', label: 'Runway' },
        { value: 'trending', label: 'Trending' },
        { value: 'accessories', label: 'Accessories' }
    ]
    return (
        <>
            <Navbar />
            <section className="bg-cover bg-center bg-no-repeat bg-[url('https://contrastly.com/wp-content/uploads/kris-atomic-73939-unsplash.jpg')] bg-gray-500 bg-blend-multiply">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="text-center mb-4 text-xl font-bold text-white">What's new in fashion?...</h2>
                    <form onSubmit={postBlog} >
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label for="category" className="block mb-2 text-sm font-medium text-white">Select Category</label>
                                <Select value={options.find((option) => option.value === post.category)} onChange={detectSelect} options={options} name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500" required="" />
                            </div>
                            <div className="w-full">
                                <label for="title" className="block mb-2 text-sm font-medium text-white">Title</label>
                                <input value={post.title} onChange={detectChange} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Next in Fashion" required="" />
                            </div>
                            <div className="w-full">
                                <label for="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                                <input value={post.description} onChange={detectChange} type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Optional" />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="content" className="block mb-2 text-sm font-medium text-white">Content</label>
                                {/* <button type="button" className="inline-flex justify-center p-2 cursor-pointer">
                                    <Upload uwConfig={uwConfig} setpublicId={publicId} />
                                </button> */}
                                {/* <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z" />
                                    </svg>
                                    <span className="sr-only">Add emoji</span>
                                </button> */}
                                <textarea value={post.content} onChange={detectChange} id="content" name='content' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Your content here" required=""></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex w-full justify-center md:w-auto items-center px-5 py-2.5 mt-4 sm:mt-6 text-lg md:text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
                            Post
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}
import { useState, useEffect } from 'react';
import React from 'react';
import Select from 'react-select';
import Navbar from "./Nav.jsx";
import cloudinary from 'cloudinary-core';

export default function Postv2() {
    cloudinary.config({
        cloud_name: 'dvrpl7d8p',
        api_key: '459673252923791',
        api_secret: '3U1dxXxNMcGr3Zm8DoidEXFoRxQ',
    });
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

    const options = [
        { value: 'designers', label: 'Designers' },
        { value: 'runway', label: 'Runway' },
        { value: 'trending', label: 'Trending' },
        { value: 'accessories', label: 'Accessories' }
    ]
    return (
        <>
            <Navbar />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="text-center mb-4 text-xl font-bold text-gray-900 dark:text-white">What's new in fashion?...</h2>
                    <form onSubmit={postBlog} >
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
                                <Select value={options.find((option) => option.value === post.category)} onChange={detectSelect} options={options} name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                            </div>
                            <div className="w-full">
                                <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input value={post.title} onChange={detectChange} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Next in Fashion" required="" />
                            </div>
                            <div className="w-full">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input value={post.description} onChange={detectChange} type="number" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Optional" />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <input type="file" name="image" accept=".jpg, .jpeg, .png" onChange={detectImage} />
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                                    </svg>
                                    <span className="sr-only">Upload image</span>
                                </button>
                                <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z" />
                                    </svg>
                                    <span className="sr-only">Add emoji</span>
                                </button>
                                <textarea value={post.content} onChange={detectChange} id="content" name='content' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your content here" required=""></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Post
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
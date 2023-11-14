import { useState, useEffect } from 'react';
import React from 'react';
import Select from 'react-select';
import Navbar from "./Nav.jsx";
import Footer from "./Footer.jsx"
import Upload from "./Upload.jsx";

export default function Postv2() {
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

    // const detectImage = (e) => {
    //     setPost({ ...post, image: URL.createObjectURL(e.target.files[0]) })
    // }

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
                {/* Form Container */}
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="text-center mb-4 text-xl font-bold text-white">What's new in fashion?...</h2>
                    <form onSubmit={postBlog} >
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            {/* select */}
                            <div className="sm:col-span-2">
                                <label for="category" className="block mb-2 text-sm font-medium text-white">Select Category</label>
                                <Select value={options.find((option) => option.value === post.category)} onChange={detectSelect} options={options} name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500" required="" />
                            </div>
                            {/* title */}
                            <div className="w-full">
                                <label for="title" className="block mb-2 text-sm font-medium text-white">Title</label>
                                <input value={post.title} onChange={detectChange} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Next in Fashion" required="" />
                            </div>
                            {/* description */}
                            <div className="w-full">
                                <label for="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                                <input value={post.description} onChange={detectChange} type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Optional" />
                            </div>
                            {/* content */}
                            <div className="sm:col-span-2">
                                <label for="content" className="block mb-2 text-sm font-medium text-white">Content</label>
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
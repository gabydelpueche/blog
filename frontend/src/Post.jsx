import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import React from 'react'
import Select from 'react-select'

export default function Post() {
    const [post, setPost] = useState({ category: "", title: "", description: "", content: "" })
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };

    const detectChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
        console.log(post)
    };

    const detectSelect = (e) => {
        setPost({ ...post, category: e.value })
        console.log(post)
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
        props.setOpenModal(undefined)
    }

    const options = [
        { value: 'designers', label: 'Designers' },
        { value: 'runway', label: 'Runway' },
        { value: 'trending', label: 'Trending' },
        { value: 'accessories', label: 'Accessories' }
    ]

    const textareaStyle = {
        margin: '0',
        height: '200px',
        resize: 'none'
    }

    const buttonStyle ={
        backgroundColor: "red"
    }

    return (
        <>
            <Button style={buttonStyle} onClick={() => props.setOpenModal('createPost')}>Add Post</Button>
            <Modal show={props.openModal === 'createPost'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={postBlog}>
                        <div className="w-full">
                            <h3 className=" text-center mb-2 text-xl font-medium text-gray-900 dark:text-white">Add Post</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="category" value="Category" />
                                </div>
                                <Select name='category' value={options.find((option) => option.value === post.category)} onChange={detectSelect} options={options} />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Title" />
                                </div>
                                <TextInput name="title" value={post.title} onChange={detectChange} className=" text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-red-600 focus:border-red-600 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600" id="title" placeholder="Title" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description" />
                                </div>
                                <TextInput name="description" value={post.description} onChange={detectChange} className=" text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-red-600 focus:border-red-600 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600" id="description" placeholder='Optional' />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="content" value="Content" />
                                </div>
                                <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                                    </svg>
                                    <span class="sr-only">Upload image</span>
                                </button>
                                <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z" />
                                    </svg>
                                    <span class="sr-only">Add emoji</span>
                                </button>
                                <textarea name="content" value={post.content} onChange={detectChange} style={textareaStyle} rows="1" class="block mx-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-red-600 focus:border-red-600 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600" placeholder="Your message..."></textarea>
                            </div>
                            <div>
                                <button type='submit' className="w-full mt-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <div className="flex items-center justify-center">
                                        Post
                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>


            {/* <Navbar />
            <div className="w-full h-auto flex justify-center">
                <form className="w-1/2 items-center" action="http://localhost:3000/createPost" method="post">
                    <div className="mb-6">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                        <select name="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600" required>
                          <option selected>Choose a Blog Category</option>
                          <option value="designers">Designers</option>
                          <option value="runway">Runway</option>
                          <option value="trending">Trending</option>
                          <option value="accessories">Accessories</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" name="title" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600" required></input>
                    </div>
                    <div className="mb-6">
                        <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input name="description" placeholder="Optional..." type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600"/>
                    </div>
                    <div className="mb-6">
                        <label for="chat" class="sr-only">Your message</label>
                        <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                                </svg>
                                <span class="sr-only">Upload image</span>
                            </button>
                            <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                                </svg>
                                <span class="sr-only">Add emoji</span>
                            </button>
                            <textarea style={textareaStyle} name="content" id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-red-600 focus:border-red-600 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600" placeholder="Your message..."></textarea>
                                <button type="submit" class="inline-flex justify-center p-2 text-red-600 rounded-full cursor-pointer hover:bg-red-100 dark:text-red-600 dark:hover:bg-gray-600">
                                <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                                </svg>
                                <span class="sr-only">Send message</span>
                            </button>
                        </div>
                    </div>
                    </form>
            </div> */}
        </>
    )
}
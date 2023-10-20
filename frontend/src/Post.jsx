import Navbar from "./Nav.jsx"
export default function Post(){
    const textareaStyle = {
        height: '200px',
        resize: 'none'
    }

    const redirect = (e) => {
        e.preventDefault();
        window.location.href = "/home";
    };

    return(
        <>
            <Navbar />
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
                                <button type="submit" class="inline-flex justify-center p-2 text-red-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-red-600 dark:hover:bg-gray-600">
                                <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                                </svg>
                                <span class="sr-only">Send message</span>
                            </button>
                        </div>
                    </div>
                    </form>
            </div>
        </>
    )
}
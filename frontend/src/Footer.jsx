export default function Footer() {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <p href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src="https://cdn3.iconfinder.com/data/icons/medical-and-science/64/Heartbeat_Pulse-512.png" className="mr-3 h-8"/>
                    RunwayRevive
                </p>
                <p className="my-6 text-gray-500 dark:text-gray-400">Runway Revive is a creative outlet for thousands of men and women around the world</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">RunwayRevive™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
export default function NavBar({ isHome, isOpen, eventIsOpen, space_mono }) {
    return (
        <div className="max-w-6xl w-full">
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">
                    <span className={`${space_mono} lg:text-4xl md:text-2xl font-mono self-center text-2xl font-semibold whitespace-nowrap`}>Anonymous<span className="text-base"> </span>Blogger</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden bg-[#1E1E1E] focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-[#A652C8]" aria-controls="navbar-default" aria-expanded="false" onClick={ () => { eventIsOpen(!isOpen) }}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className={`${!isOpen && 'hidden'} md:static w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-normal lg:text-2xl justify-end flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-transparent bg-[#1E1E1E] border-[#A652C8] border-2">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-zinc-900 hover:text-white md:hover:bg-transparent" aria-current="page">{!isHome ? 'About' : 'Home'}</a>
                        </li>
                        <li>
                            <a href="#" className="flex gap-x-1 py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-zinc-900 hover:text-white md:hover:bg-transparent">New Blog{" "}
                                <img
                                    className="lg:w-[25px]"
                                    src="/plus-square.svg"
                                    width="20"
                                    height="20"
                                    alt="square-icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-zinc-900 hover:text-white md:hover:bg-transparent flex gap-x-1">Search{" "}
                                <img
                                    className="lg:w-[25px]"
                                    src="/search-icon.svg"
                                    width="20"
                                    height="20"
                                    alt="search-icon"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className={`border-t-[0.83px] border-solid border-[#252C39] w-full border-r-[0.83px] mt-4 ${isOpen && 'hidden'}`} />
            </nav>

        </div>
    )
}

// () => { setIsOpen(!isOpen)
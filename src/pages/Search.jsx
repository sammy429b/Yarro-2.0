const Search = () => {
    return (
        <>
            <main className="w-full flex flex-col justify-center items-center lg:px-0 md:px-2 sm:px-6 px-4">
                <form id="searchForm" className="w-full lg:w-[70%] md:w-[75%] sm:w-full mt-8 ">
                    <div className="userSearchBox w-full flex items-center justify-center mt-8 lg:gap-x-4 md:gap-x-2 gap-x-3">
                        <input type="text"
                            className="border-2 lg:w-[90%] md:w-[95%] sm:w-full w-full h-[3.5rem] px-6 rounded-full group-data-[checked=true]:bg-gray-800 group-data-[checked=true]:text-white"
                            name="search" id="searchUsers" placeholder="find your friend" />
                        <label className="material-icons mx-2 text-2xl cursor-pointer group-data-[checked=true]:text-white select-none">
                            <i className="fa fa-search"></i>
                        </label>
                        <input type="submit" id="search" hidden />
                    </div>

                </form>
                <div className="UsersSection shadow-md lg:w-[65%] md:w-[80%] sm:w-full sm:mx-[3rem] mt-8 w-full" id="user_section">

                    <a href="/u/{{item['username']}}"
                        className="flex mt-2 items-center bg-white p-6 rounded-lg shadow group-data-[checked=true]:bg-black group-data-[checked=true]:shadow-gray-400">
                        <div className="flex-shrink-0 ">
                            <img className="h-12 w-12 rounded-full" src='/images/user.png' alt="User Avatar" />
                        </div>
                        <div className="ml-6">
                            <h2 className="font-bold text-lg group-data-[checked=true]:text-white">Name</h2>
                            <p className="text-gray-700 group-data-[checked=true]:text-gray-500">username</p>
                        </div>
                    </a>

                </div>
            </main>
        </>
    )
}

export default Search

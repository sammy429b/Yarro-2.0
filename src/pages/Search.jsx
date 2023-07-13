const Search = () => {
  return (
    <>
      <main className="w-full flex flex-col justify-center">
    <form id="searchForm" className="w-full">
        <div className="userSearchBox w-full flex items-center justify-center mt-8 md:px-32 lg:px-64 gap-x-4 ">
            <input type="text"
                className="border-2 w-[80%] h-[6vh] p-4 rounded-full group-data-[checked=true]:bg-gray-800 group-data-[checked=true]:text-white"
                name="search" id="searchUsers" placeholder="find your friend" />
            <label className="material-icons mx-2 text-3xl cursor-pointer group-data-[checked=true]:text-white select-none">search</label>
            <input type="submit" id="search" hidden />
        </div>

    </form>
    <div className="UsersSection md:pl-32 md:pr-48 lg:pl-64 lg:pr-80 mt-8 w-full" id="user_section">
        
        <a href="/u/{{item['username']}}"
            className="flex mt-2 items-center bg-white p-6 rounded-lg shadow group-data-[checked=true]:bg-black group-data-[checked=true]:shadow-gray-400">
            <div className="flex-shrink-0 ">
                <img className="h-12 w-12 rounded-full" src='/image/' alt="User Avatar" />
            </div>
            <div className="ml-6">
                <h2 className="font-bold text-lg group-data-[checked=true]:text-white"></h2>
                <p className="text-gray-700 group-data-[checked=true]:text-gray-500"></p>
            </div>
        </a>
        
    </div>
</main>
    </>
  )
}

export default Search

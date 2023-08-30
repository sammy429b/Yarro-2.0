import { useSnackbar } from "notistack";
import { useState } from "react";
import { Link } from "react-router-dom";
const Search = () => {
    const [users, setUsers] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    let searched = false;
    const SearchForm = async (event) => {
        event.preventDefault();
        searched = true;
        document.getElementById('searchForm').disabled = true;

        const form = new FormData(event.target);
        const args = Object.fromEntries(form.entries());

        const response = await fetch(`${import.meta.env.VITE_SERVER}/api/search?user=${args.search}`, {
            method: 'GET',
            mode: 'cors',
            'credentials': 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json());
        console.log(response)
        if (response.status === "success") {
            if (response.data.length)
                setUsers(response.data);
        }
        else {
            enqueueSnackbar(response.message, { variant: 'error' })
        }

        document.getElementById('searchForm').disabled = false;

    }



    return (

        <main className="w-full min-h-[100vh] flex flex-col bg-white justify-start items-center lg:px-0 md:px-2 sm:px-6 px-4 dark:bg-[#181818]">
            <form id="searchForm" className="w-full lg:w-[70%] md:w-[75%] sm:w-full mt-8" onSubmit={SearchForm}>
                <div className="userSearchBox w-full flex items-center justify-center mt-8 lg:gap-x-4 md:gap-x-2 gap-x-3">
                    <input type="text"
                        className="border-2 dark:border-none outline-none dark:text-gray-200 lg:w-[90%] md:w-[95%] sm:w-full w-full h-[3.5rem] px-6 rounded-full dark:bg-[#303030]"
                        name="search" id="searchUsers" placeholder="find your friend" />
                    <label className="material-icons mx-2 text-2xl cursor-pointer select-none">
                        <i className="fa fa-search dark:filter dark:invert-[70%]"></i>
                    </label>
                    <input type="submit" id="search" hidden />
                </div>

            </form>

            <div className="UsersSection shadow-md lg:w-[65%] md:w-[80%] sm:w-full sm:mx-[3rem] mt-8 w-full" id="user_section">
                {
                    users.length > 0 &&
                    users.map(user => <Link to={`/u/${user.username}`} key={user.uid}
                        className="flex mt-2 items-center bg-white p-6 rounded-lg shadow group-data-[checked=true]:bg-black group-data-[checked=true]:shadow-gray-400 dark:bg-[#303030]">

                        <div className="flex-shrink-0 ">
                            <img className="h-12 w-12 rounded-full" src='/images/user.png' alt="User Avatar" />
                        </div>
                        <div className="ml-6">
                            <h2 className="font-bold text-lg text-gray-800">{user.name}</h2>
                            <p className="text-gray-700 ">@{user.username}</p>
                        </div>
                    </Link>)
                }
            </div>
        </main>

    )
}

export default Search

import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthProvider"

const Navbar = ({ theme, toggleTheme }) => {

    const link = [
        { "name": "Home", "icon": "home", "link": "/" },
        { "name": "Search", "icon": "search", "link": "/search" },
        { "name": "Chat", "icon": "chat", "link": "/chat" }

    ]

    const { auth, setAuth } = useContext(AuthContext)

    const Logout = async () => {
        const response = await fetch(`${import.meta.env.VITE_SERVER}/api/logout`, {
            method: 'POST',
            mode: 'cors',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => response.json())
        if (response.status === "success") {
            setAuth({ ...auth, "login": false, uid: '', uname: '' });
            document.cookie = "";
            window.location.href = '/';
        }
    }


    const nav_links = link.map((link) =>
        <Link key={link.name} to={link.link} className="hover:cursor-pointer flex flex-col w-12 h-14 md:w-16 md:h-16 text-sm md:text-md  text-black justify-center items-center dark:text-white bg-purple-400 dark:bg-purple-500 rounded-xl">
            <div className="material-symbols-outlined text-2xl select-none text-black dark:text-white" id="homebtn">{link.icon}</div>
            <div className="select-none text-center">{link.name}</div>
        </Link>
    )


    return (

        <div id="Nav" className="w-full bg-gray-100 h-[5rem] text-black flex items-center justify-between dark:bg-[#1a1a1a] border-none border-b-purple-400 dark:border-b-purple-900">
            <Link to={'/'} id="Logo" className="flex flex-row gap-x-1 items-center ml-4 text-2xl font-medium font-sans">
                <img src="images/logo.png" alt="" className="w-[2rem] justify-center items-center" />
                <h1 className="text-black dark:text-white">Yarro</h1>
            </Link>
            {auth.login &&
                <div className="flex flex-row gap-x-2 md:gap-x-4 justify-center items-center">
                    {
                        nav_links
                    }
                </div>
            }
            <div id="Nav-btns" className="flex gap-x-2 md:gap-x-4 items-center justify-center mr-2">
                {auth.login ?
                    <div className="relative inline-block group/nav ">
                        <div className="profile-container">
                            <img id="profile-img" src={`${import.meta.env.VITE_SERVER}/image/${auth.uid}`} alt="pfp" className="w-[40px] md:w-[50px] rounded-full select-none" />
                        </div>
                        <div
                            className="navs group-hover/nav:block absolute hidden w-36 right-1 z-9 shadow-xl group-data-[checked=true]:text-white">
                            <p className="py-2 hover:cursor-pointer pl-2 bg-white text-black dark:text-white dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900"
                                id="profile-btn">
                                Profile
                            </p>
                            <p onClick={Logout} className="py-2 hover:cursor-pointer pl-2 bg-white text-black dark:text-white dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900"
                                id="logout-btn">
                                Logout
                            </p>
                        </div>
                    </div>
                    :
                    <>
                        <Link className="w-[8rem] h-[2.6rem] bg-purple-600 hover:bg-purple-500 text-white rounded-[.3rem] border-none outline-none text-center pt-[0.4rem] dark:bg-purple-800 duration-200" to="/login">Log In</Link>
                        <Link className="w-[8rem] h-[2.6rem] text-purple-600 border-purple-500 border-2 rounded-[.3rem] outline-none text-center pt-[0.3rem] dark:border-purple-800 duration-200" to="/register">Sign Up</Link>
                    </>
                }
                <div>
                    <label htmlFor="theme" className="">
                        <span id="theme_button" onClick={toggleTheme}
                            className="material-symbols-outlined text-3xl md:text-4xl text-black dark:text-white select-none hover:cursor-pointer">
                            {theme ? "light_mode" : "dark_mode"}
                        </span>
                    </label>
                </div>
            </div>
        </div>

    )
}

export default Navbar

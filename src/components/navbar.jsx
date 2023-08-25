import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthProvider"

const Navbar = ({ theme,toggleTheme }) => {

    const link = [
        { "name": "Home", "icon": "home", "link": "/" },
        { "name": "Search", "icon": "search", "link": "/search" },
        { "name": "Chat", "icon": "chat", "link": "/chat" }

]

    const {auth,setAuth} = useContext(AuthContext)

    const Logout = async () => {
        fetch(`${import.meta.env.VITE_SERVER}/api/logout`, {
            method: 'POST',
            mode: 'cors',
            credentials:"include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => response.json())

        setAuth({...auth, "login":false, uid: '', uname: ''})
        document.cookie = ""
    }

    const nav_links = link.map((link) =>
        <Link key={link.name} to={link.link} className="hover:cursor-pointer text-black dark:text-white">
            <p className="material-symbols-outlined pt-4 mx-2 text-2xl select-none text-black dark:text-white" id="homebtn">{link.icon}</p>
            <p className="select-none">{link.name}</p>
        </Link>
    )

    return (
        <>
            <div id="Nav" className="w-full bg-[#EDF4F6] h-[5rem] text-black flex items-center justify-between dark:bg-gray-800">
                <Link to={'/'} id="Logo" className="flex gap-x-1 items-center ml-4 text-2xl font-medium font-sans">
                    <img src="images/logo.png" alt="" className="w-[2rem]" />
                    <h1 className="text-black dark:text-white">Yarro</h1>
                </Link>
                {auth.login &&
                    <div className="flex gap-x-8">
                        {
                            nav_links
                        }
                    </div>
                }
                <div id="Nav-btns" className="flex justify-center gap-x-4 items-center  w-[16rem] h-[4rem] ">
                    {auth.login ?
                        <div className="relative inline-block group/nav ">
                            <div className="profile-container pt-4 pr-8 min-w-[50px] max-w-[50px] min-h-[50px] mr-4">
                                <img id="profile-img" src={`${import.meta.env.VITE_SERVER}/image/${auth.uid}`} alt="pfp" className="min-w-[50px] h-[50px] rounded-full select-none" />
                            </div>
                            <div
                                className="navs group-hover/nav:block absolute hidden w-36 right-1 z-1 shadow-xl group-data-[checked=true]:text-white">
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
                            <Link className="w-[10rem] h-[2.6rem] bg-purple-600 text-white rounded border-none outline-none text-center pt-[0.4rem]" to="/login">Log In</Link>
                            <Link className="w-[10rem] h-[2.6rem] text-purple-600 border-purple-500 border-2 rounded outline-none text-center pt-[0.3rem]" to="/register">Sign Up</Link>
                        </>
                    }
                    <div>
                        <label htmlFor="theme" className="">
                            <span id="theme_button" onClick={toggleTheme}
                                className="material-symbols-outlined pt-1 px-4 text-4xl text-black dark:text-white select-none hover:cursor-pointer">
                                {theme?"light_mode":"dark_mode"}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

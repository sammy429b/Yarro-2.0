
const navbar = ({ login }) => {

    const link = [{ "name": "Home", "icon": "home", "link": "/" },
    { "name": "Search", "icon": "search", "link": "/search" }]

    const nav_links = link.map((link) =>
        <a key={link.name} href={link.link} className="hover:cursor-pointer group-data-[checked=true]:text-white">
            <p className="material-symbols-outlined pt-4 mx-2 text-2xl select-none" id="homebtn">{link.icon}</p>
            <p className="select-none">{link.name}</p>
        </a>
    )

    return (
        <>
            <div id="Nav" className="w-full bg-[#EDF4F6] h-[5rem] text-black flex items-center justify-between">
                <div id="Logo" className=" flex gap-x-1 items-center ml-4 text-2xl font-medium font-sans">
                    <img src="images/logo.png" alt="" className="w-[2rem]" />
                    <h1 className="">Yarro</h1>
                </div>
                {login &&
                    <div className="flex gap-x-8">
                        {
                            nav_links
                        }
                    </div>
                }
                <div id="Nav-btns" className="flex justify-center gap-x-4 items-center  w-[16rem] h-[4rem] ">
                    {login ?
                        <div className="relative inline-block group/nav ">
                            <div className="profile-container pt-4 pr-8 min-w-[50px] max-w-[50px] min-h-[50px] mr-4">
                                <img id="profile-img" src="" alt="pfp" className="min-w-[50px] h-[50px] rounded-full select-none" />
                            </div>
                            <div
                                className="navs group-hover/nav:block absolute hidden w-36 right-1 z-1 shadow-xl group-data-[checked=true]:text-white">
                                <p className="py-2 hover:cursor-pointer pl-2 bg-white hover:bg-gray-300 group-data-[checked=true]:bg-gray-900 group-data-[checked=true]:hover:bg-black"
                                    id="profile-btn">
                                    Profile
                                </p>
                                <p className="py-2 hover:cursor-pointer pl-2 bg-white hover:bg-gray-300 group-data-[checked=true]:bg-gray-900 group-data-[checked=true]:hover:bg-black"
                                    id="logout-btn">
                                    Logout
                                </p>
                            </div>
                        </div>
                        :
                        <>
                            <a className="w-[10rem] h-[2.6rem] bg-purple-600 text-white rounded border-none outline-none text-center pt-[0.4rem]" href="/login">Log In</a>
                            <a className="w-[10rem] h-[2.6rem] text-purple-600 border-purple-500 border-2 rounded outline-none text-center pt-[0.3rem]" href="/register">Sign Up</a>
                        </>
                    }
                    <div>
                        <label htmlFor="theme" className="">
                            <span id="theme_button"
                                className="material-symbols-outlined pt-1 px-4 text-4xl group-data-[checked=true]:text-white select-none hover:cursor-pointer">
                                dark_mode
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default navbar

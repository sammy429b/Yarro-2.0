  export default function Navbar({ login, link_name, link_icon }) {

    const link = [{ "name": "Home", "icon": "home", "link": "/" },
    { "name": "Search", "icon": "search", "link": "/search" }]

    const nav_links = link.map((link) =>
        <a key={link.name} href={link.link} className="hover:cursor-pointer group-data-[checked=true]:text-white">
            <p className="material-symbols-outlined pt-4 mx-2 text-2xl select-none" id="homebtn">{link.icon}</p>
            <p className="select-none">{link.name}</p>
        </a>
    )

    return (
        <header className="w-full flex flex-row items-center place-content-between">
            <a href="/" className="pl-8 text-2xl font-medium mt-4 group-data-[checked=true]:text-white">
                Yarro
            </a>
            <div className="navTabs flex gap-x-8">
                {
                    login && nav_links
                }
            </div>


            <div className="items-center flex">
                <label htmlFor="theme">
                    <span id="theme_button"
                        className="material-symbols-outlined pt-4 px-4 text-4xl group-data-[checked=true]:text-white select-none hover:cursor-pointer">
                        dark_mode
                    </span>
                </label>
                <input type="checkbox" id="theme" className="hidden" />
                {login &&
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
                }
            </div>
        </header>
    )
}
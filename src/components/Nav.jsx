
const Nav = () => {
  return (
    <>
      <div id="Nav" className="w-full bg-[#EDF4F6] h-[5rem] text-black flex items-center justify-between">
        <div id="Logo" className=" flex gap-x-1 items-center ml-4 text-2xl font-medium font-sans">
            <img src="images/logo.png" alt="" className="w-[2rem]"/>
            <h1 className="">Yarro</h1>
        </div>
        <div id="Nav-btns" className="flex justify-center gap-x-4 items-center  w-[16rem] h-[4rem] ">
            <button className="w-[10rem] h-[2.6rem] bg-purple-600 text-white rounded px-2">Log In</button>
            <button className="w-[10rem] h-[2.6rem] text-purple-600 border-purple-500 border-2 rounded px-2">Sign Up</button>
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

export default Nav

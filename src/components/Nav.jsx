import { useNavigate } from "react-router-dom"

const Nav = ({theme,toggleTheme}) => {

    const navigate = useNavigate()


  return (
    <>
      <div id="Nav" className="w-full bg-[#EDF4F6] h-[5rem] text-black flex items-center justify-between dark:bg-gray-800">
        <div id="Logo" className=" flex gap-x-1 items-center ml-4 text-2xl font-medium font-sans">
            <img src="images/logo.png" alt="" className="w-[2rem]"/>
            <h1 className="text-black dark:text-white">Yarro</h1>
        </div>
        <div id="Nav-btns" className="flex justify-center gap-x-4 items-center  w-[16rem] h-[4rem] ">
            <button className="w-[10rem] h-[2.6rem] bg-purple-600 text-white rounded px-2" onClick={() => {navigate("/login")}}>Log In</button>
            <button className="w-[10rem] h-[2.6rem] bg-purple-600 text-white rounded px-2">Sign Up</button>
            <div>
            <label htmlFor="theme" className="">
                    <span id="theme_button"
                        className="material-symbols-outlined pt-1 px-4 text-4xl text-black dark:text-white select-none hover:cursor-pointer" onClick={toggleTheme}>
                        {
                        theme ? "light_mode" : "dark_mode"  
                        }
                    </span>
                </label>
            </div>
        </div>
      </div>
    </>
  )
}

export default Nav

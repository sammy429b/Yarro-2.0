const Index = () => {
  return (
    <>
     <main className="mt-28">

<div className="containerx flex justify-center lg:place-content-evenly lg:mr-10 px-16">
    <div className="image-container hidden lg:block">
        <img className="w-md max-w-xl" src="images/login.png" alt="someimage" />
    </div>

    <div
        className="form-container border rounded-[3rem] flex flex-col px-8 py-[70px] border-white bg-white group-data-[checked=true]:bg-black group-data-[checked=true]:border-gray-900">
        <form id="login_form"
            className="login-form flex flex-col w-[370px] lg:w-[400px] transition-[width] duration-500 group-data-[checked=true]:bg-black">
            <div className="phrase-container flex justify-center">
                <p className="phrase text-3xl font-semibold pb-8 text-center group-data-[checked=true]:text-white">
                    Login to access your account
                </p>
            </div>

            <input
                className="m-[8px] rounded-lg h-12 pl-3 border-2 group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white"
                type="text" name="uname" placeholder="username" id="uname" />
            <div id="pass"
                className="outline outline-0 m-[8px] rounded-lg h-12 pl-3 pr-2 border-2 flex justify-between items-center group-data-[checked=true]:bg-[#3b4148]">
                <input
                    className="h-10 border-none w-full outline-none group-data-[checked=true]:text-white group-data-[checked=true]:bg-[#3b4148]"
                    type="password" name="passwd" placeholder="Password" id="passwd" />
                <input type="checkbox" id="pw" className="hidden" />
                <label  id="vis" className="material-symbols-outlined select-none hover:cursor-pointer">
                    visibility
                </label>
            </div>
            <a href="/password/reset"
                className="forgot-text w-full flex text-sm px-4 justify-end hover:underline underline-offset-1 group-data-[checked=true]:text-white">
                Forgot password
            </a>
            <input className="mt-[20px] rounded-full h-[40px] text-white text-m bg-[#7034E4] hover:cursor-pointer "
                type="submit" name="login_btn" id="login_btn" value="Login" />
            <a href="/register"
                className="register-text flex justify-center mt-[50px] hover:underline underline-offset-1 group-data-[checked=true]:text-white">
                Sign up instead?
            </a>
        </form>
    </div>
</div>
</main> 
    </>
  )
}

export default Index

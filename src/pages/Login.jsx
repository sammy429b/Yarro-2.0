
const Login = () => {
    return (
        <>
            <div
                id="form-container"
                className="className= lg:w-1/2 lg:h-[40rem] rounded-[3rem] flex items-center justify-center px-8 py-[70px] border-black group-data-[checked=true]:bg-black group-data-[checked=true]:border-gray-900"
            >
                <form
                    id="login_form"
                    className=" shadow-2xl bg-white rounded-[1.5rem] flex gap-y-2 flex-col w-[30rem] lg:w-[32rem] lg:h-[30rem] p-6 transition-[width] duration-500 group-data-[checked=true]:bg-black"
                >
                    <div className="phrase-container flex justify-center">
                        <p className="phrase text-3xl font-semibold text-center py-4 group-data-[checked=true]:text-white">
                            Login to access your account
                        </p>
                    </div>

                    <input
                        className="m-[8px] border-2 rounded-lg h-12 pl-3 className= group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white outline-none"
                        type="text"
                        name="uname"
                        placeholder="username"
                        id="uname"
                    />
                    <div
                        id="pass"
                        className="outline-none border-2 m-[8px] rounded-lg h-12 pl-3 pr-2 className= flex justify-between items-center group-data-[checked=true]:bg-[#3b4148]"
                    >
                        <input
                            className="h-10 border-none w-full outline-none group-data-[checked=true]:text-white group-data-[checked=true]:bg-[#3b4148]"
                            type="password"
                            name="passwd"
                            placeholder="Password"
                            id="passwd"
                        />
                        <input type="checkbox" id="pw" className="hidden" />
                        <label
                            id="vis"
                            className="material-symbols-outlined select-none hover:cursor-pointer"
                        >
                            visibility
                        </label>
                    </div>
                    <a
                        href="/password/reset"
                        className="forgot-text w-full flex text-sm px-4 justify-end hover:underline underline-offset-1 group-data-[checked=true]:text-white"
                    >
                        Forgot password
                    </a>
                    <input
                        className="mt-[20px] rounded-full h-[40px] text-white text-m bg-blue-700 hover:bg-blue-600 duration-200 hover:cursor-pointer "
                        type="submit"
                        name="login_btn"
                        id="login_btn"
                        value="Login"
                    />
                    <a
                        href="/register"
                        className="register-text flex justify-center mt-[3rem] hover:underline underline-offset-1 group-data-[checked=true]:text-white"
                    >
                        Sign up instead?
                    </a>
                </form>
            </div>
        </>
    )
}

export default Login

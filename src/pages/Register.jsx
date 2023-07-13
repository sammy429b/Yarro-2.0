
const Register = () => {
    return (
        <>
            <main>
                <div className="root flex flex-row justify-center lg:place-content-evenly mt-[100px]">
                    <div
                        className="form-container border rounded-[3rem] flex flex-col px-[50px] py-[70px] border-white bg-white group-data-[checked=true]:bg-black">
                        <form id="reg_form"
                            className="flex flex-col w-[320px] lg:w-[400px] transition-[width] duration-500 group-data-[checked=true]:bg-black">
                            <div className="phrase-container flex justify-center">
                                <p className="phrase text-xl text-center group-data-[checked=true]:text-white">
                                    Share your thoughts with people and connect to
                                    them
                                </p>
                            </div>
                            <input
                                className="m-[8px]  rounded-lg h-12 pl-[15px] border-2 group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white"
                                type="email" name="email" placeholder="email" id="email" />
                            <input
                                className="m-[8px]  rounded-lg h-12 pl-[15px] border-2 group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white"
                                type="text" name="uname" placeholder="username" id="username" />
                            <input
                                className="m-[8px]  rounded-lg h-12 pl-[15px] border-2 group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white"
                                type="password" name="passwd1" placeholder="Password" id="passwd1" />
                            <input
                                className="m-[8px]  rounded-lg h-12 pl-[15px] border-2 group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white"
                                type="password" name="passwd2" placeholder="Reenter Password" id="passwd2" />
                            <input
                                className="mt-[20px] rounded-full h-[40px] text-white text-m bg-[#7034E4] hover:cursor-pointer disabled:bg-gray-900"
                                type="submit" name="reg" id="reg" value="Register" />
                            <a href="/"
                                className="flex justify-center mt-[30px] hover:underline underline-offset-1 group-data-[checked=true]:text-white">
                                Login instead?
                            </a>
                        </form>
                    </div>

                    <div className="image-container hidden lg:block">
                        <img src="images/reg.png" alt="someimg" className="w-[600px] " />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register

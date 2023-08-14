const Forgotpass = () => {
    return (
        <>
                <div className="w-full bg-[#FAFAFA] h-[41.9rem] flex items-center justify-center">
                    <div id="form-container"
                        className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end group-data-[checked=true]:bg-black group-data-[checked=true]:border-black group-data-[checked=true]:text-white">
                        <form id="forgot_form" className="shadow-xl bg-white rounded-[1.5rem] flex flex-col items-center justify-center gap-y-4 w-[32rem] lg:w-[34rem] h-[22rem] group-data-[checked=true]:bg-black"
                            onSubmit="return false;">
                            <div id="phrase-container" className=" w-[29rem]  flex flex-col">
                                <p className="phrase text-2xl font-bold text-left mb-4 ">
                                    Reset Password
                                </p>
                                <p>
                                    Enter your email address, we will send you a link to reset your password.
                                </p>
                            </div>
                            <input
                                className="my-1  p-4 w-[29rem] rounded-lg h-12 border-2 group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white outline-none"
                                type="email" name="email" placeholder="email" id="email" />
                            <input
                                className="my-1 w-[29rem] rounded-full h-[40px] text-white text-m bg-[#7034E4] hover:bg-blue-600 duration-300 hover:cursor-pointer disabled:bg-gray-900 mb-4"
                                type="submit" name="reset" id="resetButton" value="Request" />
                            <a href="/login"
                                className="underline-animation flex justify-center mt-2 group-data-[checked=true]:text-white hover:underline duration-300 translate-y-1 hover:translate-y-0">
                                Login instead?
                            </a>
                        </form>
                    </div>

                    <div id="image-container" className="lg:w-1/2 hidden lg:flex lg:justify-center lg:items-center ">
                        <img src="/images/forgot.png" alt="Forgot Pass" className="w-[35.5rem] " />
                    </div>
                </div>
            
        </>
    )
}

export default Forgotpass

const Reset = () => {
  return (
    <>
    <main className="bg-[#FAFAFA] h-[41.9rem] flex items-center justify-center">
                <div id="root" className="w-full flex flex-row justify-center items-center">
                    <div id="form-container"
                        className="w-full lg:w-1/2 border rounded-[3rem] flex items-center justify-center lg:justify-end border-white  group-data-[checked=true]:bg-black">
                        <form id="reg_form"
                            className="bg-white shadow-xl rounded-[1.5rem] flex items-center flex-col w-[30rem] h-[25rem] lg:w-[34rem] gap-y-4 transition-[width] duration-500 group-data-[checked=true]:bg-black">
                            <div id="phrase-container" className=" flex my-6">
                                <p className="phrase text-2xl font-semibold group-data-[checked=true]:text-white">
                                    Reset Password
                                </p>
                            </div>
                            
                            <input
                                className="w-[27rem] lg:w-[29rem] p-4 rounded-lg h-12 border-2 group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white outline-none"
                                type="password" name="passwd1" placeholder="Password" id="passwd1" />
                            <input
                                className="w-[27rem] lg:w-[29rem] p-4 rounded-lg h-12 border-2 group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white outline-none"
                                type="password" name="passwd2" placeholder="Reenter Password" id="passwd2" />
                            <input
                                className="w-[27rem] lg:w-[29rem] mt-2 rounded-full h-10 text-white flex items-center justify-center bg-[#7034E4] hover:bg-blue-700 duration-300 hover:cursor-pointer disabled:bg-gray-900"
                                type="submit" name="reg" id="reg" value="Reset" />
                            <a href="/"
                                className="underline-animation flex justify-center mt-4 group-data-[checked=true]:text-white hover:underline duration-300 translate-y-1 hover:translate-y-0">
                                Login instead?
                            </a>
                        </form>
                    </div>
 
                    <div id="image-container" className="w-1/2 hidden lg:flex items-center justify-center">
                        <img src="images/forgot.png" alt="someimg" className="w-[35.5rem] " />
                    </div>
                </div>
            </main>

    </>
  )
}

export default Reset

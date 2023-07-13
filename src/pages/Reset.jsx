const Reset = () => {
  return (
    <>
     <main>
    <div className="root flex flex-row justify-center lg:place-content-evenly mt-[200px]">
        <div
            className="form-container border rounded-[3rem] flex flex-col px-[50px] py-[70px] border-white bg-white group-data-[checked=true]:bg-black group-data-[checked=true]:border-gray-900">
            <form id="reset_form" className="flex flex-col w-[360px] lg:w-[400px] group-data-[checked=true]:bg-black">
                <div className="phrase-container flex flex-col justify-center">
                    <p className="phrase text-xl text-center group-data-[checked=true]:text-white">
                        Reset Password
                    </p>
                    <p className="phrase text-l text-center font-medium group-data-[checked=true]:text-white">
                        {/* {{uname}} */}
                    </p>
                </div>
                <input type="password" id="newpass1" name="newpass1" placeholder="Enter new password"
                    className="m-[8px]  rounded-lg h-12 pl-[15px] border-2" />
                <input type="password" id="newpass2" name="newpass2" placeholder="Confirm Password"
                    className="m-[8px]  rounded-lg h-12 pl-[15px] border-2" />

                <input
                    className="mt-[20px] rounded-full h-[40px] text-white text-m bg-[#7034E4] hover:cursor-pointer disabled:bg-gray-900"
                    type="submit" name="reset" id="resetButton" value="Reset" />
            </form>
        </div>

        <div className="image-container hidden lg:block">
            <img src="/images/forgot.png" alt="someimg" className="w-[600px]" />
        </div>
    </div>
</main> 
    </>
  )
}

export default Reset

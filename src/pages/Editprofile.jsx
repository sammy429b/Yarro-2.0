import React from 'react'

const Editprofile = () => {
    return (
        <>
            <main className="flex justify-center my-12 w-full group-data-[checked=true]:text-white">
                <div className="profile flex flex-col items-center w-[50%] border-2 ">

                    <div className="user_profile flex flex-col items-center">
                        <img src="" alt="" id="user_image" className=" min-w-[120px] max-w-[120px] h-[120px] rounded-full" />
                        <form id="image_form" method="POST" enctype="multipart/form-data" action="/sendimage">
                            <label for="image_upload" className="cursor-pointer">change profile picture</label>
                            <input type="file" id="image_upload" name="image" accept="image/*" className="w-0 h-0" />
                        </form>
                        <p id="username" className="font-medium text-xl "></p>
                    </div>

                    <form id="save_form" className="flex flex-col px-8 my-4 w-[80%] border-2">

                        <div className="inputags mt-2">
                            <p>Name</p>
                            <input type="text"
                                className="border-2 w-full p-2 group-data-[checked=true]:bg-gray-800 group-data-[checked=true]:border-black"
                                id="name" name="name" placeholder="Name" />
                        </div>

                        <div className="inputags mt-2">
                            <p>Gender</p>
                            <select id="gender"
                                className="border-2 w-full p-2 group-data-[checked=true]:bg-gray-800 group-data-[checked=true]:border-black"
                                name="gender">
                                <option value="" selected>Not Selected</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Other</option>
                            </select>
                        </div>

                        <div className="inputags mt-2">
                            <p>Mobile Number</p>
                            <input type="tel"
                                className="border-2 w-full p-2 group-data-[checked=true]:bg-gray-800 group-data-[checked=true]:border-black"
                                id="mob" name="mob" placeholder="Mobile" />
                        </div>

                        <div className="inputags mt-2">
                            <p>Date of birth</p>
                            <input type="date"
                                className="border-2 w-full p-2 group-data-[checked=true]:bg-gray-800 group-data-[checked=true]:border-black"
                                id="dob" name="dob" placeholder="DOB" />
                        </div>
                        <div className="inputags mt-2">
                            <p id="biocount">Bio (limit to 255 characters)</p>
                            <textarea
                                className="border-2 w-full p-2 group-data-[checked=true]:bg-gray-800 group-data-[checked=true]:border-black"
                                id="bio" name="bio" placeholder="Bio" ></textarea>
                        </div>

                        <div className="inputags mt-2 w-full flex justify-center ">
                            <input type="submit" value="Save"
                                className="w-full border my-4 p-2 rounded-full bg-purple-600 text-white cursor-pointer group-data-[checked=true]:bg-gray-800 group-data-[checked=true]:border-black" />
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Editprofile

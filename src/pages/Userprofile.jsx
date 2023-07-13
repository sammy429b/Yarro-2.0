const Userprofile = () => {
    return (
        <>
            <main className="flex flex-col">
                <div className="data flex flex-row pt-12 pl-4 pr-10 md:px-36 lg:px-80">
                    <div className="pfp-container w-full flex flex-row mb-8">
                        <div className="pfp min-w-[120px] max-w-[120px] min-h-[120px] pt-4 pr-4">
                            <img id="pfpimage2" src="/image/{{uid}}" alt="pfp"
                                className="min-w-[120px] h-[120px] rounded-full select-none" />
                        </div>
                        <div className="flex flex-row place-content-between">
                            <div className="uname-name pl-12 pt-4 flex flex-col group-data-[checked=true]:text-white">
                                <div className="flex flex-row">
                                    <p id="uname" className="p-2 font-medium "></p>
                                    <div className="editbtn mt-1 ml-4">
                                        
                                        <button id="editprofile"
                                            className="edit-button bg-white-900 h-[30px] w-[100px] border rounded-full border-purple-700 text-purple-700 hover:cursor-pointer hover:bg-purple-600 hover:text-white">
                                            Edit Profile</button>
                                        
                                    </div>
                                </div>
                                <p id="name" className="p-2"></p>
                                <div className="bio pl-2 pt-8">
                                    <p className="whitespace-pre-wrap" id="bio"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="post-area w-full flex flex-col px-1 md:px-36 lg:px-80" id="post_section">

                </div>
            </main>
        </>
    )
}

export default Userprofile

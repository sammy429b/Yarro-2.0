import React from 'react'
import Usercard from '../components/userCard'
const Chat = () => {
    return (
        <>
            <div id='chatPage' className='w-full max-h-[89vh] flex '>
                <div id='userList' className='w-[25%] max-h-[1%] border-2 overflow-y-scroll'>
                    <Usercard />
                    <Usercard />
                    <Usercard />
                    <Usercard />
                    <Usercard />
                    <Usercard />
                    <Usercard />
                    <Usercard />
                    <Usercard />
                </div>
                <div id='chatSection' className='w-[75%] relative'>
                    <div>
                        <div className='border flex w-full h-[4rem] p-2'>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                class="w-[3rem] rounded-full shadow-lg mr-2"
                                alt="Avatar" />
                            <div className='flex flex-col justify-center'>
                                <h5 class="mb-2 text-lg font-medium leading-none">John Doe</h5>
                                {/* <p class="text-neutral-500 dark:text-neutral-400 leading-none text-sm">last seen</p> */}
                            </div>
                        </div>
                    </div>
                    <div id='chatWindow' className='bg-[#f7f7f7] h-[80.5vh]'>
                        <div id='messageSection' className='py-4 px-1 h-[72vh]'>
                            <p id='right' className='text-right '>
                                <span className='bg-slate-200 max-w-[10rem] p-2 rounded'>hii</span>
                            </p>
                            <p id='left' className='text-left '>
                                <span className='bg-slate-200 max-w-[10rem] p-2 rounded'>hii</span>
                            </p>
                        </div>
                        <div id='sendMessage' className=''>
                            <div class="mb-3">
                                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                                    <input
                                        type="text"
                                        class="relative m-0 h-[3.9rem] block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                        placeholder="Type message"
                                        aria-label="Search"
                                        aria-describedby="button-addon2" />
                                <button className='w-[6rem] bg-blue-500 text-white'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat

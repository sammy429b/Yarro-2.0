import React from 'react'

const Usercard = () => {
    return (
        <>
            <div className='border flex w-full h-[5rem] p-2'>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                    class="w-[4rem] rounded-full shadow-lg mr-4"
                    alt="Avatar" />
                    <div className='flex flex-col justify-center'>
                    <h5 class="mb-2 text-lg font-medium leading-none">John Doe</h5>
                    <p class="text-neutral-500 dark:text-neutral-400 leading-none text-base">last message</p>
                    </div>
            </div>
        </>
    )
}

export default Usercard

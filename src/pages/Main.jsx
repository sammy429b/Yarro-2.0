const Main = () => {
  return (
    <>
     <main>
    <div id="text-modal" className="relative z-10 " hidden aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-gray-500 bg-opacity-50">
                <div
                    className="relative mb-[300px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg group-data-[checked=true]:bg-gray-900">
                    <div
                        className="bg-white px-4 pt-2 pb-2 sm:p-6 sm:pb-4 border group-data-[checked=true]:bg-gray-900 group-data-[checked=true]:border-black">
                        <div className="sm:flex sm:items-start mt-2 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                            <p className="text-lg font-medium group-data-[checked=true]:text-white ">
                                New Post</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            <textarea name="content" id="postcontent" cols="30" rows="10"
                                className="w-full resize-none px-5 py-5 focus:outline-none group-data-[checked=true]:bg-black group-data-[checked=true]:text-white"></textarea>
                        </p>
                    </div>
                    <div
                        className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 group-data-[checked=true]:bg-gray-900">
                        <button type="button" id="post_btn"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                            Post
                        </button>
                        <button type="button" id="cancle_btn"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="image-modal" className="relative z-10" hidden aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-gray-500 bg-opacity-50">
                <div
                    className="relative mb-[300px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                    <div
                        className="bg-white px-4 pt-2 pb-2 sm:p-6 sm:pb-4 border group-data-[checked=true]:bg-gray-900 group-data-[checked=true]:text-white group-data-[checked=true]:border-black">
                        <div className="sm:flex sm:items-start mt-2 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                            <p className="text-lg font-medium">New Post</p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="post-image-container flex flex-col items-center group-data-[checked=true]:bg-gray-900">
                            <img src="" alt="" id="post_image" className="" />
                            <form id="image_form" method="POST" action="/sendimage">
                                <label className="cursor-pointer group-data-[checked=true]:text-white">Upload Image</label>
                                <input type="file" id="image_upload" name="image" accept="image/*" className="w-0 h-0" />
                            </form>
                        </div>
                    </div>
                    <div
                        className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 group-data-[checked=true]:bg-gray-900">
                        <button type="button" id="post_image_btn"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                            Post
                        </button>
                        <button type="button" id="cancle_image_btn"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div id="report_modal" className="relative z-10 " hidden aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <p id="report_post_id" className="hidden"></p>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-gray-500 bg-opacity-50">
                <div
                    className="relative mb-[300px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg group-data-[checked=true]:bg-gray-900">
                    <div
                        className="bg-white px-4 pt-2 pb-2 sm:p-6 sm:pb-4 border group-data-[checked=true]:bg-gray-900 group-data-[checked=true]:border-black">
                        <div className="sm:flex sm:items-start mt-2 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                            <p className="text-lg font-medium group-data-[checked=true]:text-white ">
                                Report Post</p>
                            <p>Caution: False Report can result to an action</p>
                        </div>
                        <p>Enter reason for report:</p>
                    </div>
                    <div>
                        <p>
                            <textarea name="content" id="report_reason" cols="30" rows="10"
                                className="w-full resize-none px-5 py-5 focus:outline-none group-data-[checked=true]:bg-black group-data-[checked=true]:text-white"></textarea>
                        </p>
                    </div>
                    <div
                        className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 group-data-[checked=true]:bg-gray-900">
                        <button type="button" id="report_btn"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                            Report
                        </button>
                        <button type="button" id="report_cancle_btn"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="postbox-container flex flex-row md:mx-36 lg:mx-80 mt-16">
        <div className="postbox px-2 w-full flex flex-row mb-8">
            <div className="pfp min-w-[45px] min-h-[45px] pt-4 pr-4">
                <img id="u_image" src="" alt="pfp" className="min-w-[45px] max-w-[45px] h-[45px] rounded-full" />
            </div>
            <div className="input my-4 w-full">
                <input id="postbox"
                    className="border border-black w-full rounded-full px-4 h-12 focus:outline-none hover:bg-gray-200 hover:cursor-pointer group-data-[checked=true]:bg-gray-800 group-data-[checked=true]:hover:bg-black"
                    placeholder="Have a topic that excites you? Post about it" />
            </div>
            <span className="material-icons pt-8 ml-4 hover:cursor-pointer group-data-[checked=true]:text-white select-none"
                id="image-modal-btn">image</span>
        </div>
    </div>
    <div className="post-area w-full flex flex-col px-1 md:px-36 lg:px-80" id="post_section"></div>

</main> 
    </>
  )
}

export default Main
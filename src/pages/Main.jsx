import { useContext, useEffect, useState } from "react"
import AuthContext from "../context/AuthProvider"
import thumb_up_off from "../assets/thumb_up_off.svg"
import thumb_up from "../assets/thumb_up.svg"
import thumb_down from "../assets/thumb_down.svg"
import thumb_down_off from "../assets/thumb_down_off.svg"
import BasicModal from "../components/PostModal"


const Main = () => {

    const [posts,setPosts] = useState([])
    const {auth} = useContext(AuthContext)

    const [open, setOpen] = useState(false);




    const getPosts = async () => {
        const response = await fetch(`${import.meta.env.VITE_SERVER}/api/posts?page=0`, {
            method: "GET",
            mode: "cors",
            credentials:"include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const data = await response.json()
        if(data.status == "success"){
            setPosts(data.data.reverse())
        }
    }


    const likePost = async (pid,islike) => {
        const response = await fetch(`${import.meta.env.VITE_SERVER}/api/like`, {
            method: "POST",
            mode: "cors",
            credentials:"include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ pid: pid, islike: islike }),
        }).then((response) => response.json());

        // update like status and count
        if (response.status == "success") {
            const data = response.data;
            console.log(data)
            const newPosts = posts.map((post) => {
                if (post.post_id == pid) {
                    post.islike = data.islike;
                    post.isdislike = data.isdislike;
                    post.lc = data.lc;
                    post.dlc = data.dlc;
                }
                return post;
            });
            setPosts(newPosts);
        }
    }

    useEffect(() => {
        getPosts()
    },[])



    return (
        <>
            <main className="bg-white dark:bg-gray-900 h-[100%]">
                <BasicModal open={open} setOpen={setOpen}/>
                <div id="createPostContainer" className="w-full h-[8rem] py-4 flex justify-center items-center bg-white dark:bg-gray-900 ">
                    <div id="wrapPost" className="bg-[#F6F8FA] w-full mt-4 p-4 sm:w-[50%] dark:bg-gray-800">
                        <input  onClick={() => {setOpen(true)}} type="text" className="w-full rounded my-2 p-4 h-[3rem] bg-[#F6F8FA] disabled dark:bg-gray-700" placeholder="Share your thougths" />
                        <div id="postBtn" className="w-full flex justify-between pl-2 pr-4">
                            <div className="text-black ">
                                <i className="fa-solid fa-images text-2xl text-black dark:text-white"></i>
                            </div>
                            <div>
                                <button><i className="fa-solid fa-paper-plane text-black dark:text-white"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mainFeed" className="w-full pt-8 h-auto flex flex-col items-center justify-center">


                    {posts.map((post) => 
                        <div id="wrapFeed" key={post.post_id} className="w-full sm:w-[50%] flex justify-center bg-[#F6F8FA] rounded-lg py-2 mt-4 dark:bg-gray-800 text-black dark:text-white">
                        <div id="feed1 " className="flex flex-col sm:w-[98%] pr-4">
                            <div id="userDetails" className="ml-2 flex justify-between m">
                                <div id="userImage" className="flex">
                                    <img src={`${import.meta.env.VITE_SERVER}/image/${post.uid}`} alt="" className="w-[4rem]" />
                                    <div className="ml-2">
                                        <p className="font-semibold">{post.fullname}</p>
                                        <p>@{post.uname}</p>
                                    </div>
                                </div>
                                <div className=" mr-2">
                                    {post.datetime}
                                </div>
                            </div>
                            <div id="postContent" className="ml-20 text-justify ">
                                <p>{
                                    post.content_type=="text" ? post.content : <img src={`${import.meta.env.VITE_SERVER}/post/images/${post.uid}`}/>
                                    }</p>

                                <div id="likeComment" className="w-full h-[3rem] px-4 my-1 items-center flex gap-x-6 text-[3rem]">
                                    <div id="likeCount" className=" flex gap-2">
                                        <img onClick={() => {likePost(post.post_id,1)}} className="w-[26px] hover:cursor-pointer dark:filter dark:invert-[100%]" src={post.islike? thumb_up : thumb_up_off}/>
                                        <span className="text-base">{post.lc}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <img onClick={() => {likePost(post.post_id,0)}} className="w-[26px] hover:cursor-pointer dark:filter dark:invert-[100%]" src={post.isdislike? thumb_down : thumb_down_off}/>
                                        <span className="text-base">{post.dlc}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default Main

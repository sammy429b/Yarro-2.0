import {useContext,useState } from "react";
import AuthContext from "../context/AuthProvider";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {

    const { auth,setAuth } = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();
    const [visible,setVisible] = useState(false)
    const navigate = useNavigate()

    const LoginForm = async function (e) {
        document.getElementById("login_btn").setAttribute("disabled","") // 
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());
        console.log(data);
        try {
            const response = await fetch(`${auth.url}/api/login`, {
                method: "POST",
                mode: "cors",
                credentials:"include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Basic " + btoa(data["uname"] + ":" + data["passwd"]),
                },
            });

            const responseData = await response.json();

            const status = responseData.status;
            console.log(responseData);
            if (status === "success") {
                setAuth({
                    ...auth,
                    login: true,
                    uid: responseData.uid,
                    uname: responseData.uname,
                });
                navigate("/")
            } else {
                console.log(status);
                enqueueSnackbar(status, {
                    variant: "error",
                    sx: {
                        "& .SnackbarContent-root": {
                            width: 100,
                            fontSize: 16,
                        },
                    },
                });
            }
        } catch (err) {
            console.log(err);
                enqueueSnackbar("network error", {
                    variant: "error",
                    sx: {
                        "& .SnackbarContent-root": {
                            width: 100,
                            fontSize: 16,
                        },
                    },
                });
        }
        document.getElementById("login_btn").removeAttribute("disabled") // 
    };


    return (
        <>
            <div
                id="form-container"
                className="w-full h-[100vh] flex items-start justify-center px-8 pt-36 border-black bg-white dark:bg-gray-900 dark:border-gray-900"
            >
                <form
                    id="login_form"
                    className=" shadow-2xl bg-white rounded-[1.5rem] flex gap-y-2 flex-col lg:w-[36rem] w-[32rem] lg:h-[30rem] p-6 transition-[width] duration-500 dark:bg-gray-800"
                    onSubmit={LoginForm}
                >
                    <div className="phrase-container flex justify-center">
                        <p className="phrase text-3xl font-semibold text-center py-4 text-black dark:text-white">
                            Login to access your account
                        </p>
                    </div>

                    <input
                        className="m-[8px] border-2 rounded-lg h-12 pl-3 className= dark:bg-[#3b4148] text-black bg-white dark:text-white outline-none"
                        type="text"
                        name="uname"
                        placeholder="username"
                        id="uname"
                    />
                    <div
                        id="pass"
                        className="outline-none border-2 m-[8px] rounded-lg h-12 pl-3 pr-2 flex justify-between items-center bg-white dark:bg-[#3b4148]"
                    >
                        <input
                            className="h-10 border-none w-full outline-none text-black bg-white dark:text-white dark:bg-[#3b4148]"
                            type={visible ?"text":"password"}
                            name="passwd"
                            placeholder="Password"
                            id="passwd"
                        />
                        <label
                            onClick={()=>{setVisible(!visible)}}
                            className="material-symbols-outlined select-none hover:cursor-pointer text-black dark:text-white"
                        >
                           {visible?"visibility_off":"visibility"}
                        </label>
                    </div>
                    <Link
                        to="/password/reset"
                        className="forgot-text w-full flex text-sm px-4 justify-end hover:underline underline-offset-1 text-black dark:text-white"
                    >
                        Forgot password
                    </Link>
                    <input
                        className="mt-[20px] mx-2 rounded-full h-[40px] text-white text-m bg-purple-600 hover:bg-purple-700 duration-200 hover:cursor-pointer disabled:bg-gray-500"
                        type="submit"
                        name="login_btn"
                        id="login_btn"
                        value="Login"
                    />
                    <Link
                        to="/register"
                        className="register-text flex justify-center mt-[3rem] hover:underline underline-offset-1 text-black dark:text-white"
                    >
                        Sign up instead?
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Login

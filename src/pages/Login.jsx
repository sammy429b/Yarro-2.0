import { useContext, useState } from "react";
import AuthContext from "../context/AuthProvider";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {

    const { setAuth } = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    const LoginForm = async function (e) {
        document.getElementById("login_btn").setAttribute("disabled", "") // 
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/api/login`, {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Basic " + btoa(data["uname"] + ":" + data["passwd"]),
                },
            });

            const responseData = await response.json();

            const status = responseData.status;
            if (status === "success") {
                setAuth({
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
                className="w-full h-[100vh] flex items-start justify-center px-8 pt-16 border-black bg-white dark:bg-[#121212]"
            >
                <form
                    id="login_form"
                    className=" shadow-2xl bg-white rounded-[1.5rem] flex gap-y-2 flex-col lg:w-[36rem] w-[32rem] lg:h-[30rem] p-6 transition-[width] duration-500 dark:bg-[#202020]"
                    onSubmit={LoginForm}
                >
                    <div className="phrase-container flex justify-center">
                        <p className="phrase text-3xl font-semibold text-center py-4 text-black dark:text-gray-200">
                            Login to access your account
                        </p>
                    </div>

                    <input
                        className="m-[8px] outline-none border-2 rounded-lg h-12 pl-3 dark:bg-[#303030] text-black bg-white dark:text-gray-300 dark:border-none"
                        type="text"
                        name="uname"
                        placeholder="username"
                        id="uname"
                    />
                    <div
                        id="pass"
                        className="outline-none border-2 m-[8px] rounded-lg h-12 pl-3 pr-2 flex justify-between items-center bg-white dark:bg-[#303030] dark:border-none"
                    >
                        <input
                            className="h-10 border-none w-full outline-none text-black bg-white dark:text-gray-300 dark:bg-[#303030] "
                            type={visible ? "text" : "password"}
                            name="passwd"
                            placeholder="Password"
                            id="passwd"
                        />
                        <label
                            onClick={() => { setVisible(!visible) }}
                            className="material-symbols-outlined select-none hover:cursor-pointer text-black dark:text-gray-300"
                        >
                            {visible ? "visibility_off" : "visibility"}
                        </label>
                    </div>
                    <Link
                        to="/password/reset"
                        className="forgot-text w-fit flex text-sm px-4 hover:underline underline-offset-1 duration-300 translate-y-1 hover:translate-y-0 self-end text-black dark:text-gray-300"
                    >
                        Forgot password
                    </Link>
                    <input
                        className="mt-[20px] mx-2 rounded-full h-[40px] text-white text-m bg-purple-500 hover:bg-purple-600 dark:bg-purple-800 hover:dark:bg-purple-700 duration-200 hover:cursor-pointer disabled:bg-gray-500"
                        type="submit"
                        name="login_btn"
                        id="login_btn"
                        value="Login"
                    />
                    <Link
                        to="/register"
                        className="register-text flex justify-center mt-[3rem] duration-300 translate-y-1 hover:translate-y-0 hover:underline underline-offset-1 self-center text-black dark:text-gray-300"
                    >
                        Sign up instead?
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Login

import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";


const Register = () => {
    const { setAuth } = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();

    const onRegister = async function (e) {
        document.getElementById("reg").disabled = true;
        e.preventDefault();

        const form = new FormData(e.target);
        const senddata = Object.fromEntries(form.entries());

        if (senddata["passwd1"] === senddata["passwd2"]) {
            try {
                const response = await fetch('http://localhost:3000/api/register', {
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(senddata)
                });

                const resData = await response.json();

                if (resData.status === "success") {
                    setAuth({ login: true, uid: resData.uid, uname: senddata["uname"] });
                    window.location.href = '/'
                }
                else {
                    enqueueSnackbar(resData.status, {
                        variant: 'error'
                    })
                }

            } catch (err) {
                console.log(err);
                enqueueSnackbar("Failed to process request", { variant: 'info' })
            }
        }
        else {
            enqueueSnackbar("Passwords do not match", {
                variant: 'error'
            })
        }

        document.getElementById('reg').disabled = false;

    }

    return (
        <>
            <main className="h-[100vh] items-start pt-36 flex justify-center bg-white dark:bg-gray-900">
                <div className=" flex flex-row justify-center items-center">
                    <div id="form-container"
                        className="w-full rounded-[3rem] px-16  py-8 flex items-center justify-center border-white bg-white shadow-xl dark:bg-gray-800">
                        <form id="reg_form" onSubmit={onRegister}
                            className=" rounded-[1.5rem] flex items-center flex-col gap-y-4 transition-[width] bg-white duration-500 dark:bg-gray-800">
                            <div id="phrase-container" className=" flex my-6">
                                <p className="phrase text-2xl font-semibold text-black dark:text-white">
                                    Create New Account
                                </p>
                            </div>
                            <input
                                className="w-[27rem] lg:w-[29rem] p-4 rounded-lg h-12 border-2 dark:bg-[#3b4148] bg-white text-black dark:text-white outline-none"
                                type="email" name="email" placeholder="email" id="email" />
                            <input
                                className="w-[27rem] lg:w-[29rem] p-4 rounded-lg h-12 border-2 dark:bg-[#3b4148] bg-white text-black dark:text-white outline-none"
                                type="text" name="uname" placeholder="username" id="username" />
                            <input
                                className="w-[27rem] lg:w-[29rem] p-4 rounded-lg h-12 border-2 dark:bg-[#3b4148] bg-white text-black dark:text-white outline-none"
                                type="password" name="passwd1" placeholder="Password" id="passwd1" />
                            <input
                                className="w-[27rem] lg:w-[29rem] p-4 rounded-lg h-12 border-2 dark:bg-[#3b4148] bg-white text-black dark:text-white outline-none"
                                type="password" name="passwd2" placeholder="Reenter Password" id="passwd2" />
                            <input
                                className="w-[27rem] lg:w-[29rem] mt-2 rounded-full h-10 text-white flex items-center justify-center bg-[#7034E4] hover:bg-blue-700 duration-300 hover:cursor-pointer disabled:bg-gray-900"
                                type="submit" name="reg" id="reg" value="Register" />
                            <Link to="/"
                                className="underline-animation flex justify-center mt-4 dark:text-white text-black hover:underline duration-300 translate-y-1 hover:translate-y-0">
                                Login instead?
                            </Link>
                        </form>
                    </div>

                    <div id="image-container" className="w-1/2 hidden lg:flex items-center justify-center">
                        <img src="images/reg.png" alt="someimg" className="w-[35.5rem] " />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register

import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({ login: false, uid: '', uname: '' });

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({ login: false, uid: '', uname: '' });

    useEffect(() => {
        const CheckLogin = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER}/api/login`, {
                    method: 'GET',
                    mode: 'cors',
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then((response) => response.json())

                const status = response.status;
                // uid and uname
                if (status === "success") {
                    setAuth({ ...auth, login: true, uid: response.uid, uname: response.uname });
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        CheckLogin()
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({ login: false, uid: '', uname: '',url:""});

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({ login: false, uid: '', uname: '',url:"https://asyncdoggo-sturdy-parakeet-wjp6gp6p99q2wpg-3000.app.github.dev" });

    useEffect(() => {
        try {
            const response = fetch(`${auth.url}/api/login`, {
                method: 'GET',
                mode: 'cors',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((response) => response.json())
    
            const status = response.status;
            // uid and uname
            if (status === "success"){
                setAuth({ ...auth,login: true,uid:response.uid,uname:response.uname });
            }
        }
        catch (err) {
            console.log(err);
        }
    },[])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
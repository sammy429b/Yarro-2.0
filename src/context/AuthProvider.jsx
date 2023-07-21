import { createContext, useState } from "react";

const AuthContext = createContext({ login: false, uid: '', uname: '' });

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({ login: true, uid: '', uname: '' });
    try {
        const response = fetch('http://localhost:3000/api/login', {
            method: 'GET',
            mode: 'cors',
            'credentials': 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => response.json())

        const status = response.status;
        // uid and uname
        if (status === "success")
            setAuth({ login: true });
    }
    catch (err) {
        console.log(err);
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
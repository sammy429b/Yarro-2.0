import { createContext, useState } from "react";

const AuthContext = createContext(false);

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);
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
        if (status === "success")
            setAuth(true);
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
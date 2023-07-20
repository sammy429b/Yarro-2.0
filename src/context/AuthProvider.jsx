import { createContext, useState } from "react";

const AuthContext = createContext(false);

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);
    try {
        const fetchPromise = fetch('https://localhost:3000/api/login', {
            method: 'PUT',
            mode: 'cors',
            'credentials': 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        fetchPromise.then(response => {
            if (response.status === 200)
                setAuth(true);
        });
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
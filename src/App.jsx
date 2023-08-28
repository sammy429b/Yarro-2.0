import Index from "./pages/Index"
import Confirmemail from "./pages/Confirmemail"
import Editprofile from "./pages/Editprofile"
import Main from "./pages/Main"
import Forgotpass from "./pages/ForgotPassword"
import Register from "./pages/Register"
import Search from "./pages/Search"
import Reset from "./pages/ResetPassword"
import Userprofile from "./pages/Userprofile"
import Navbar from "./components/navbar"
import Login from "./pages/Login"

import { Route, Routes } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import AuthContext from "./context/AuthProvider"

function App() {
  const { auth } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") === "true" ? true : false)

  const toggleTheme = () => {
    setTheme(!theme)
    localStorage.setItem("theme", !theme)
  }

  useEffect(() => {
    if (theme) {
      document.getElementsByTagName("meta")["color-scheme"].content = 'dark';
    }
    else {
      document.getElementsByTagName('meta')["color-scheme"].content = 'light';
    }
  }, []);

  return (
    <div className={
      theme ? "dark min-h-[100%]" : "min-h-[100%]"
    }>
      {/* <Navbar login={auth.login} /> */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {auth.login
        ?// auth = true i.e user is logged in
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Userprofile />} />
          <Route path="/profile/edit" element={<Editprofile />} />
        </Routes>
        : // auth = false i.e user is not logged in
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm" element={<Confirmemail />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/password/reset" element={<Forgotpass />} />
        </Routes>
      }

    </div>
  )
}

export default App

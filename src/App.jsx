import Index from "./pages/Index"
import Confirmemail from "./pages/Confirmemail"
import Editprofile from "./pages/Editprofile"
import Main from "./pages/Main"
import Forgotpass from "./pages/Forgotpass"

import Register from "./pages/Register"
import Search from "./pages/Search"
import Reset from "./pages/Reset"
import Userprofile from "./pages/Userprofile"
import Navbar from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import { useContext } from "react";
import AuthContext from "./context/AuthProvider"
function App() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Navbar auth={auth} />

      {auth
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
          <Route path="/register" element={<Register />} />
          <Route path="/confirm" element={<Confirmemail />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/password/reset" element={<Forgotpass />} />
        </Routes>
      }

    </>
  )
}

export default App

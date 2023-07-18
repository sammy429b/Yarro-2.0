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
function App() {

  return (
    <>
    <Navbar/>
      <Routes>

     <Route path="/" element={<Index/>}/>
     <Route path="/test2" element={<Confirmemail/>}/> 
     <Route path="/profile/edit" element={<Editprofile/>}/>
     <Route path="/password/reset" element={<Forgotpass/>}/>
     <Route path="/test" element={<Main/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/search" element={<Search/>}/>
     <Route path="/reset" element={<Reset/>}/>
     <Route path="/profile" element={<Userprofile/>}/>
      </Routes>
    </>
  )
}

export default App

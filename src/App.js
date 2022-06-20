import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import { Route, Routes } from "react-router-dom"
import Announcement from "./components/Announcement"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Announcement />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Routes, 
  Route, Redirect,} from "react-router-dom";
import Announcement from "./components/Announcement"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    
    <div className="container">
      
   <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </Router>
        </div>
    </>
  )
}

export default App
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header'
import Product from './pages/Product'
import Signup from './pages/Signup'
import News from './pages/News'
import Help from './pages/Help'
import Login from './pages/Login'
import Search from './pages/Search'
import Cart from './pages/Cart'

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<><Header /><Product/></>} />
        <Route path="/news" element={<><Header /><News /></>} />
        <Route path="/help" element={<><Header /><Help /></>} />
        <Route path="/login" element={<><Header /><Login/></>} />
        <Route path="/signup" element={<><Header /><Signup/></>} />
        <Route path="/search" element={<><Header /><Search /></>} />
        <Route path="/cart" element={<><Header /><Cart /></>} />
      </Routes>
    </Router>
  );
}

export default App;

import { Link } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import About from '../pages/about/About.jsx';
import Login from '../pages/auth/login/Login.jsx';
import Reg from '../pages/auth/reg/Reg.jsx';
import './Header.css';

function Header() {
  return (
    <header id="top-section">
        <div className="logo">Logo</div>
        <div className="nav-container">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/login" className="nav-item">Login</Link>
            <Link to="/reg" className="nav-item reg">Get Started</Link>
        </div>
    </header>
    );
}

export default Header;
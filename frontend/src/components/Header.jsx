import {BrowserRoute, Route} from 'react-router-dom';
import './style.Header.css';

function Header() {
  return (
    <header id="top-section">
        <div className="logo">Logo</div>
        <div className="navbar">
            <Link to={}>Home</Link>
            <Link to={}>About</Link>
            <Link to={}>Login</Link>
            <Link to={}>Get Started</Link>
        </div>
    </header>
    );
}

export default Header;
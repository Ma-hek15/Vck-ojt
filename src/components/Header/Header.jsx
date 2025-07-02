import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header1">
    <header className="site-header">
      <div className="brand">
       Vivekanand College
        </div>
      <nav className="nav-links">
        <Link to="/home" className="Links" style={{color:"white"}}>Home</Link>
        <Link to="/about" className="Links" style={{color:"white"}}> About</Link>
        <Link to="/courses" className="Links" style={{color:"white"}}> Courses</Link>
        <Link to="/contact" className="Links" style={{color:"white"}}> Contact</Link>
        <Link to="/admission" className="apply-btn" > Apply Now!</Link>
      </nav>
    </header>
    </div>
  );
};

export default Header;
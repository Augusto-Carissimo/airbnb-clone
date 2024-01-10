import logo from "../images/airbnb 1.png"
import '../css/Navbar.css';

function Navbar() {
  return(
    <nav className="navbar">
      <img src={logo} className="airbnb-logo"/>
    </nav>
  );
}

export default Navbar
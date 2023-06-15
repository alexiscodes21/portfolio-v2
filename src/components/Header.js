import { useState, useEffect } from "react";
import alexiswinters from "../img/alexiswinters.png";

const Header = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the display based on the viewport width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <a className="navbar-logo" href="#">
            <img className="alexiswinters" src={alexiswinters} alt={"Alexis Winters"} />
          </a>
        </div>
        <ul
          className="navbar-menu"
          id="navbar-menu"
          style={{
            display: isNavbarVisible ? "flex" : "none",
            flexDirection: window.innerWidth > 600 ? "row" : "column",
          }}
        >
          <li className="nav-item active">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#skillsSection">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projectsSection">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contactSection">Contact</a>
          </li>
        </ul>
        <button className="navbar-toggle" id="navbar-toggle" onClick={toggleNavbar}>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;

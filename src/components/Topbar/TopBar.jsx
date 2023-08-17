import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Topbar.scss";

function Topbar() {
  let location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isActive && !event.target.closest(".burger")) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`topbar ${isActive ? "active" : ""} ${
          isScrolled ? "topbar--scroll" : ""
        }`}
      >
        <p className="h6">
          <Link to="/" className="topbar__logo">

          </Link>
        </p>
        <ul className={`nav nav__burger ${isActive ? "active" : ""}`}>
          <li className="nav__item">
            <Link to="/" className="nav__item--link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#projects" className="nav__item--link">
              Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/Contact" relative="/contact">
              Contact
            </Link>
          </li>
          
        </ul>
        <div className="nav__wrap">

          <div
            className={`burger ${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <svg
              width="35"
              height="24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="#222" strokeWidth="2" d="M0 7h35M10 15h25" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;

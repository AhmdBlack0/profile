import profileImage from "../imgs/profile.jpg"; // Import the image
import "../css/App.css";
import { useState } from "react";
import { useEffect } from "react";

function NavBar() {
  const [elem, setElem] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 400) {
        console.log("test")
        setElem(true)
      } else {
        setElem(false)
      }
    })
  }, [])

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Toggler Button for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <div className="div-up d-flex justify-content-evenly w-100 flex-wrap">
            {/* First Section: Home, About, Resume */}
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
            </ul>

            <div className="profile-container mb-2 mb-lg-0">
                <img src={profileImage} alt="Profile"
                className={`profile-image ${elem ? "visible" : "hidden"}`} />
              <div className={`title ${elem ? "hidden" : "visible"}`} >
                <h6>Ahmed Osama</h6>
                <p>
                  Web Developer
                </p>

              </div>
            </div>

            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;



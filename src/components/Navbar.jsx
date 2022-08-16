import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="loader_bg">
        <div className="loader">
          <img src="images/loading.gif" alt="#" />
        </div>
      </div>
      <header>
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.html">
                        <img src="images/logo.png" alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarsExample04"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/"
                          style={({ isActive }) => {
                            return { color: isActive ? "#51fe44" : "" };
                          }}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="about-us"
                          style={({ isActive }) => {
                            return { color: isActive ? "#51fe44" : "" };
                          }}
                        >
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="products"
                          style={({ isActive }) => {
                            return { color: isActive ? "#51fe44" : "" };
                          }}
                        >
                          Products
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="services"
                          style={({ isActive }) => {
                            return { color: isActive ? "#51fe44" : "" };
                          }}
                        >
                          Service
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="gallery"
                          style={({ isActive }) => {
                            return { color: isActive ? "#51fe44" : "" };
                          }}
                        >
                          Gallery
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="contact-us"
                          style={({ isActive }) => {
                            return { color: isActive ? "#51fe44" : "" };
                          }}
                        >
                          Contact Us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="cart"
                          style={({ isActive }) => {
                            return { color: isActive ? "#51fe44" : "" };
                          }}
                        >
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                          &nbsp; Cart
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

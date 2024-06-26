import React from "react";
import "../components/styles.css";

export function Navbar() {
    return (
      <div className="Navbar">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand me-auto" href="#main">🎬Uriel Peliculas</a>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">🎬Uriel Peliculas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active mx-lg-2 " aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 " href="#">Peliculas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 " href="#">Series</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 " href="#">TV show</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 " href="#">Documentales</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="#" className="login-button">Login</a>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
      </div>
    );
}

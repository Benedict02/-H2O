import React, { useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "../assets/navbar.css";

const Navbar = () => {
  const iconSrc = "./icon.png";
  const nav__icon = useRef(null);
  const nav__overlay = useRef(null);
  useEffect(() => {
    const navbar__burger = document.getElementById("nav__burger");
    const handleBurger = () => {
      nav__icon.current.classList.toggle("show-icon");
      // nav__overlay.current.classList.toggle("animate__fadeInLeft");
      // nav__overlay.current.classList.toggle("animate__fadeOutLeft");
      nav__overlay.current.classList.toggle("hide");
    };
    navbar__burger.addEventListener("click", handleBurger);
    return () => navbar__burger.removeEventListener("click", handleBurger);
  }, []);

  return (
    <>
      <header className="header">
        <img className="header__logo--img" src={iconSrc} alt="logoUlerGacor" />
        <p className="header__logo--text">-H2O</p>
      </header>
      <nav className="nav">
        <button className="nav__burger" id="nav__burger">
          <i className="ri-menu-2-line" ref={nav__icon}></i>
          Menu
        </button>
        <div className="nav__wrapper--link">
          <div className="nav__item">
            <Link className="link__nav link__nav--head" to="/-H2O/">
              Home
            </Link>
          </div>
          <div className="nav__item">
            <Link className="link__nav link__nav--head" to="/-H2O/about">
              About us
            </Link>
          </div>
          <div className="nav__item">
            <Link className="link__nav link__nav--head" to="/">
              Forum
            </Link>
          </div>

          <div className="nav__item">
            <Link className="link__nav--body">Login</Link>
          </div>
        </div>
        <div className="nav__balance">
          <p className="nav__balance--text">100</p>
        </div>
        <div className="nav__overlay hide" ref={nav__overlay}>
          <span className="nav__overlayContent">
            <div className="nav__item">
              <Link className="link__nav link__nav--head" to="/">
                Home
              </Link>
            </div>
            <div className="nav__item">
              <Link className="link__nav link__nav--head" to="/">
                About Us
              </Link>
            </div>
            <div className="nav__item">
              <Link className="link__nav link__nav--body" to="/">
                Developers
              </Link>
            </div>
            <div className="nav__item">
              <Link className="link__nav link__nav--head" to="/">
                Forum
              </Link>
            </div>

            <hr className="nav__seperator" />
            <div className="nav__item">
              <Link className="link__nav link__nav--head" to="/">
                Enter
              </Link>
            </div>
            <div className="nav__item">
              <Link className="link__nav link__nav--body">Sign Up</Link>
            </div>
            <div className="nav__item">
              <Link className="link__nav link__nav--body">Login</Link>
            </div>
          </span>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

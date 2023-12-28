import React, { useState } from "react";
import { useIsFirstRender } from "@uidotdev/usehooks";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";

//import logo image
import museumLogo from "../images/logo1small.jpg";

const Navbar = () => {
  const isFirstRender = useIsFirstRender();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickHamburger = (event) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isMenuOpen ? "header open" : "header"}>
      <div
        className={
          isFirstRender
            ? "overlay"
            : isMenuOpen
            ? "overlay has-fade fade-in"
            : "overlay has-fade fade-out"
        }
      ></div>
      <nav className="container flex flex-jc-sb flex-ai-c">
        <Link className="logo" to="/">
          <img src={museumLogo} alt="logo" />
        </Link>
        <a
          href="/"
          className="header__toggle hide-for-desktop"
          onClick={handleClickHamburger}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div className="header__links hide-for-mobile">
          <NavLink exact="true" activeclassname="active" to="/">
            Главная
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/places">
            Места
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/artefacts">
            Объекты
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/people">
            Люди
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/about">
            О проекте
          </NavLink>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://vk.com/muzei.furmanova"
          className="header__social hide-for-mobile"
        >
          <FontAwesomeIcon icon={faVk} className="envelope" />
        </a>
      </nav>
      <div
        className={
          isFirstRender
            ? "hidden"
            : isMenuOpen
            ? "header__menu has-fade fade-in"
            : "header__menu has-fade fade-out"
        }
      >
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Главная
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/places"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Места
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/artefacts"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Объекты
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/people"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Люди
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          О проекте
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;

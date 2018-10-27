import React from "react";
import "./header.css";
import logo from "../../images/font.png";

const Header = () => (
  <section className="hero" id="title">
    <img className="image is-large" src={logo} alt="logo" />
  </section>
);

export default Header;

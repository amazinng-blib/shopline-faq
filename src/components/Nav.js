import React from "react";
import logo from "../images/logo-preview.png";
import apple from "../images/apple-store.png";
import googlePlay from "../images/google-play-store.png";
const Nav = () => {
  return (
    <nav>
      <article className="nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Shopline</h2>
        </div>
        <div className="download">
          <img src={googlePlay} alt="google play store" />

          <img src={apple} alt="apple store" />
        </div>
      </article>
    </nav>
  );
};

export default Nav;

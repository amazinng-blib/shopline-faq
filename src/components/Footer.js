import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../images/logo-preview.png";

const Footer = () => {
  const [mail, setMail] = useState("");
  const date = new Date().getFullYear();

  const handleInput = (e) => {
    e.preventDefault();
  };
  return (
    <footer>
      <section className="footer-section">
        <div className="contact">
          <img src={logo} alt="logo" />
          <a href="mailto:support@joinshopline.com">
            <li>support@joinshopline.com</li>
          </a>
          <a href="tel:+256-75771-2667" className="contact">
            <li>+256-75771-2667</li>
          </a>
        </div>
        <div className="company">
          <h3>company</h3>
          <ul>
            <li>home</li>
            <li>features</li>
            <li>how it works</li>
            <li>compare</li>
          </ul>
        </div>
        <div className="about-us">
          <h3>help & support</h3>
          <ul>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="address">
          <h3>our address</h3>
          <p>Makerere University</p>
          <ul>
            <li>
              <FaFacebook className="facebook" />
            </li>
            <li>
              <FaTwitter className="twitter" />
            </li>
            <FaInstagram className="instagram" />
          </ul>
          <div className="newsletter">
            <p>sign up for newsletter</p>
            <form className="footer-input">
              <input
                type="mail"
                placeholder="Email address"
                className="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <button type="submit" className="sub">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <p className="copyright">&copy; copyright {date} shopline</p>
    </footer>
  );
};

export default Footer;

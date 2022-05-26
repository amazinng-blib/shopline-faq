import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Footer from "./components/Footer";

import { Helmet } from "react-helmet";

const App = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shopline: FAQ</title>
        <link rel="canonical" href="" />
        <meta name="description" content="Shopline FAQ" />
      </Helmet>
      <Nav />
      <Home />
      <section className="contact-section">
        <p>
          Have more questions, reach out to us{" "}
          <a href="mailto:hello@joinshopline.com  subject= text">
            hello@joinshopline.com
          </a>
        </p>

        <div className="icons">
          <FaTwitter className="twitter" />
          <FaFacebook className="facebook" />
          <FaInstagram className="instagram" />
        </div>
      </section>

      <section className="sign-up">
        <article className="sign-up-container">
          <div className="dot-container  div-1">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="text-section">
            <p>
              ready to go from idea to a business in <br /> 2 minutes?
            </p>
            <button className="btn text-btn">Yes, sign me up</button>
          </div>
          <div className="dot-container  div-2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </article>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;

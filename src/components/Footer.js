import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrap">
            <div className="footer__info">
              <div className="footer__logo">
                <img src="/images/logo.svg" alt="" />
              </div>
              <p className="footer__text">
                FitForce is an online marketplace that connects fitness
                professionals with people seeking qualified trainers. Our
                mission is to become the leading platform enabling delivery of
                personalized wellness services.
              </p>
              <div className="footer__app">
                <h6>Download app</h6>
                <div className="footer__download">
                  <Link to={"#"}>
                    <img src="/images/a.svg" alt="" />
                  </Link>
                  <Link to={"#"}>
                    <img src="/images/g.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <nav className="footer__nav">
              <Link to={"#"}>Home</Link>
              <Link to={"#"}>Support</Link>
              <Link to={"#"}>Magazine</Link>
              <Link to={"#"}>For Trainers</Link>
            </nav>
            <div className="footer__follow">
              <h6>Follow Us</h6>
              <div className="footer__socials">
                <Link to={"#"}>
                  <img src="/images/twitter.svg" alt="" />
                </Link>
                <Link to={"#"}>
                  <img src="/images/facebook.svg" alt="" />
                </Link>
                <Link to={"#"}>
                  <img src="/images/instagram.svg" alt="" />
                </Link>
              </div>
            </div>
            <div className="footer__subscribe">
              <h6>FitForce is growing.</h6>
              <p>Stay up to date with the latest news on what's coming soon.</p>
              <form action="#" className="footer__form">
                <input type="text" placeholder="Name" className="footer__input" />
                <input type="email" placeholder="Email" className="footer__input" />
                <button type="submit" className="footer__btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="footer__credits">
            Copyright 2019 FitForce Inc. All Rights Reserved | San Francisco,
            California | <Link to={"#"}>Privacy Policy</Link> |
            <Link to={"#"}>Terms and Conditions</Link>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;

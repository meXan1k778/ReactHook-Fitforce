import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="header__logoBox">
              <img
                src="/images/logo.svg"
                alt="Fitforce"
                className="header__logo"
              />
              <img
                src="/images/logo_small.svg"
                alt="Fitforce"
                className="header__logo_small"
              />
            </div>
            <div
              className="header__burger"
              onClick={() => setOpened(!isOpened)}
            >
              Menu
            </div>
            <div className="header__linksBox">
              <div className={`header__links ${isOpened ? "opened" : ""}`}>
                <Link to={"#"} className="header__link">
                  For Trainers
                </Link>
                <Link to={"#"} className="header__link">
                  Support
                </Link>
                <Link to={"#"} className="header__link">
                  Magazine
                </Link>
              </div>
              <div className="header__cloud">
                <img src="/images/cloud.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

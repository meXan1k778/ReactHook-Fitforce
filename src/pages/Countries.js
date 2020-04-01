import React, { Fragment } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

// Components

// Actions
import { test } from "../actions/test";

const Countries = ({ history, test }) => {
  return (
    <Fragment>
      <section className="countries">
        <div className="container">
          <div className="page__back" onClick={() => history.push("/")}>
            <img src="/images/arrowBack.svg" alt="" />
            <span>Back</span>
          </div>
          <div className="page__mainTitle">
            <h1>Select Country & City</h1>
          </div>
          <div className="countries__items">
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>United Kingdom</h6>
              </div>
              <div className="countries__cities">
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>United Kingdom</h6>
              </div>
              <div className="countries__cities">
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>United Kingdom</h6>
              </div>
              <div className="countries__cities">
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>United Kingdom</h6>
              </div>
              <div className="countries__cities">
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>United Kingdom</h6>
              </div>
              <div className="countries__cities">
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>United Kingdom</h6>
              </div>
              <div className="countries__cities">
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
                <div
                  className="countries__city"
                  onClick={() => history.push("/trainers")}
                >
                  Liverpool
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  test
};

Countries.propTypes = {
  // test:PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);

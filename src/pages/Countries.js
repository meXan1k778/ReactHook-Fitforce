import React, { Fragment } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

// Components
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";

// Actions
import { test } from "../actions/test";

const Countries = ({ history, test }) => {
  return (
    <Fragment>
      <section className="countries">
        <div className="container">
          <div
            className="page__back"
            onClick={() => (window.location = "https://fitforce.com/")}
          >
            <img src="/images/arrowBack.svg" alt="" />
            <span>Back to FotForce.com</span>
          </div>
          <div className="page__mainTitle">
            <h1>Select Service</h1>
          </div>
          <div className="countries__services">
            <label className="countries__service">
              <Checkbox disabled={false} />
              Online Coaching
            </label>
            <label className="countries__service">
              <Checkbox disabled={false} />
              Health and fitness training
            </label>
            <label className="countries__service">
              <Checkbox disabled={false} />
              Yoga and Pilates
            </label>
            <label className="countries__service ml25px">
              <Checkbox disabled={false} />
              Diet and nutrition
            </label>
            <label className="countries__service ml25px">
              <Checkbox disabled={false} />
              Physiotherapy
            </label>
            <label className="countries__service ml25px">
              <Checkbox disabled={false} />
              Other
            </label>
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

// {key:0, value:'Health and fitness training', order: 1 },
// {key:1, value:'Yoga and Pilates', order: 2 },
// {key:2, value:'Diet and nutrition', order: 3},
// {key:3, value:'Physiotherapy', order: 4},
// {key:4, value:'Other', order: 5},
// {key:5, value:'Online Coaching', order: 0},

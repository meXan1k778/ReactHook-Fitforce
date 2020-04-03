import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
            <Link
              to={{ pathname: "/trainers/Online Coaching", type: "servece" }}
              className="countries__service"
            >
              Online Coaching
            </Link>
            <Link
              to={{ pathname: "/trainers/Health and fitness training" }}
              className="countries__service"
            >
              Health and fitness training
            </Link>
            <Link
              to={{ pathname: "/trainers/Yoga and Pilates", type: "servece" }}
              className="countries__service"
            >
              Yoga and Pilates
            </Link>
            <Link
              to={{ pathname: "/trainers/Diet and nutrition", type: "servece" }}
              className="countries__service ml25px"
            >
              Diet and nutrition
            </Link>
            <Link
              to={{ pathname: "/trainers/Physiotherapy", type: "servece" }}
              className="countries__service ml25px"
            >
              Physiotherapy
            </Link>
            <Link
              to={{ pathname: "/trainers/Other", type: "servece" }}
              className="countries__service ml25px"
            >
              Other
            </Link>
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
                <h6>
                  <Link
                    to={{
                      pathname: "/trainers/United Kingdom",
                      type: "country"
                    }}
                  >
                    United Kingdom
                  </Link>
                </h6>
              </div>
              <div className="countries__cities">
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>
                  <Link
                    to={{
                      pathname: "/trainers/United Kingdom",
                      type: "country"
                    }}
                  >
                    United Kingdom
                  </Link>
                </h6>
              </div>
              <div className="countries__cities">
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>
                  <Link
                    to={{
                      pathname: "/trainers/United Kingdom",
                      type: "country"
                    }}
                  >
                    United Kingdom
                  </Link>
                </h6>
              </div>
              <div className="countries__cities">
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>
                  <Link
                    to={{
                      pathname: "/trainers/United Kingdom",
                      type: "country"
                    }}
                  >
                    United Kingdom
                  </Link>
                </h6>
              </div>
              <div className="countries__cities">
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>
                  <Link
                    to={{
                      pathname: "/trainers/United Kingdom",
                      type: "country"
                    }}
                  >
                    United Kingdom
                  </Link>
                </h6>
              </div>
              <div className="countries__cities">
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
              </div>
            </div>
            <div className="countries__item">
              <div className="countries__country">
                <div className="countries__flag">
                  <img src="/images/united-kingdom.svg" alt="" />
                </div>
                <h6>
                  <Link
                    to={{
                      pathname: "/trainers/United Kingdom",
                      type: "country"
                    }}
                  >
                    United Kingdom
                  </Link>
                </h6>
              </div>
              <div className="countries__cities">
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
                <Link
                  to={{ pathname: "/trainers/Liverpool", type: "city" }}
                  className="countries__city"
                >
                  Liverpool
                </Link>
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

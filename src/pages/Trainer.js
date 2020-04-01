import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// Components

// Actions
import { test } from "../actions/test";

const Trainer = ({ history, test }) => {
  return (
    <Fragment>
      <section className="trainer">
        <div className="container">
          <div className="page__back" onClick={() => history.push("/trainers")}>
            <img src="/images/arrowBack.svg" alt="" />
            <span>Back</span>
          </div>
          <div className="trainer__wrap">
            <div className="trainer__main">
              <h1>Rob McMurray / Impact Fitness</h1>
              <p className="d-none d-md-block">Mayford, United Kingdom</p>
              <div className="trainer__certs">
                <img src="/images/quality.svg" alt="" />
                <p>10 Certificates</p>
              </div>
            </div>
            <div className="trainer__pic">
              <img src="/images/image8.jpg" alt="" />
            </div>
            <div className="trainer__about">
              <div className="trainer__item trainer__item_mob">
                <h6>City</h6>
                <p>Mayford, United Kingdom</p>
              </div>
              <div className="trainer__item trainer__item_desktop">
                <h6>Certifications</h6>
                <p>CPT - NESTA</p>
              </div>
              <div className="trainer__item">
                <h6>Services</h6>
                <p>
                  <span>Online Coaching</span>,<span>Online Coaching</span>,
                  <span>Online Coaching</span>,<span>Online Coaching</span>
                </p>
              </div>
              <div className="trainer__item">
                <h6>About</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
              </div>
              <div className="trainer__socials">
                <Link to={"#"} className="trainer__social">
                  <img src="/images/ff.svg" alt="" />
                </Link>
                <Link to={"#"} className="trainer__social">
                  <img src="/images/ii.svg" alt="" />
                </Link>
                <Link to={"#"} className="trainer__social">
                  <img src="/images/tt.svg" alt="" />
                </Link>
              </div>
              <div className="trainer__download">
                <p>
                  Download <span>FitForce.com</span> Personal Fitness app and
                  connect with <span>Rob</span>
                </p>
                <div className="trainer__btns">
                  <Link to={"#"}>
                    <img src="/images/Appstorebtn.svg" alt="" />
                  </Link>
                  <Link to={"#"}>
                    <img src="/images/Google play btn.svg" alt="" />
                  </Link>
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

// Trainer.propTypes = {
//   // test:PropTypes.func,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Trainer);

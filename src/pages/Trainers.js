import React, { Fragment } from "react";
import { connect } from "react-redux";

// Components
import Trainer from "../components/Trainer";

// Actions
import { test } from "../actions/test";

const Trainers = ({ history, test }) => {
  return (
    <Fragment>
      <section className="trainers">
        <div className="container">
          <div className="page__back" onClick={() => history.push("/")}>
            <img src="/images/arrowBack.svg" alt="" />
            <span>Back</span>
          </div>
          <div className="page__mainTitle">
            <h1>Nearby Trainers</h1>
            <div className="page__country">
              Country: <span>United States</span>
            </div>
          </div>
          <div className="trainers__items">
            <Trainer history={history} />
            <Trainer history={history} />
            <Trainer history={history} />
          </div>
        </div>
      </section>{" "}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  test
};

Trainers.propTypes = {
  // test:PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainers);

import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

// Components
import Trainer from "../components/Trainer";

// Actions
import { test } from "../actions/test";

const Trainers = ({ history, test, match, location }) => {
  useEffect(() => {
    setFilter(match.params.servece);
    window.scroll(0, 0);
  }, [match.params.servece]);

  const [filter, setFilter] = useState({});

  const getParamsType = () => {
    if (location.type === "servece") {
      return `Service Type: ${match.params.servece}
      `;
    } else if (location.type === "country") {
      return `Country: ${match.params.servece}`;
    } else if (location.type === "city") {
      return `City: ${match.params.servece}`;
    }
  };
  return (
    <Fragment>
      <section className="trainers">
        <div className="container">
          <div className="page__back" onClick={() => history.push("/")}>
            <img src="/images/arrowBack.svg" alt="" />
            <span>Back</span>
          </div>
          <div className="page__mainTitle">
            <h1>Available Trainers</h1>
            <div className="page__country">{getParamsType()}</div>
          </div>
          <div className="trainers__items">
            {trainersArr.map(elem => {
              if (
                elem.specialities.match(filter) ||
                elem.location.match(filter)
              ) {
                return <Trainer data={elem} />;
              }
              return <div />;
            })}
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

Trainers.propTypes = {
  // test:PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainers);

const trainersArr = [
  {
    specialities: "Online Coaching, Diet and nutrition",
    location: "Liverpool"
  },
  {
    specialities: "Health and fitness training, Diet and nutrition",
    location: "United Kingdom, Liverpool"
  },
  {
    specialities: "Health and fitness training, Diet and nutrition",
    location: "Termecula, California, United States"
  }
];

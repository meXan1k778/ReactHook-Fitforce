import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Trainer = ({data}) => {
  console.log('data', data)
  return (
    <div className="trainers__item">
      <div className="trainers__main">
        <div className="trainers__pic">
          <img src="/images/image_6.png" alt="" />
        </div>
        <div className="trainers__bio">
          <h5>Rob McMurray</h5>
          <h6>Impact Fitness</h6>
        </div>
        <p className="trainers__geo">{data.location}</p>
      </div>
      <div className="trainers__spec">
        <span>Specialities:</span> {data.specialities}
      </div>
      <Link to={'/trainer'} className="trainers__link">
        Learn more about Juliane Perez
      </Link>
    </div>
  );
};

Trainer.propTypes = {
  data: PropTypes.object,
}

export default Trainer;

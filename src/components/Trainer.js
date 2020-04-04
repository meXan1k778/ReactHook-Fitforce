import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { servicesArr } from "../constants";

const Trainer = ({ trainer }) => {
  const {
    first_name,
    last_name,
    city,
    country,
    services,
    avatar_url,
    business_name
  } = trainer;

  const servicesString = services.map(
    service => `${servicesArr[service].value},`
  );
  return (
    <div className="trainers__item">
      <div className="trainers__main">
        <div className="trainers__pic">
          {avatar_url ? (
            <img src={avatar_url} alt="avatar" />
          ) : (
            <img src="/images/avatar.png" alt="avatar" />
          )}
        </div>
        <div className="trainers__bio">
          <h5>{first_name + " " + last_name}</h5>
          <h6>{business_name}</h6>
        </div>
        <p className="trainers__geo">{city + ", " + country}</p>
      </div>
      <div className="trainers__spec">
        <span>Specialities: {servicesString.join(" ").replace(/,$/, "")}</span>
      </div>
      <Link to={"/trainer"} className="trainers__link">
        Learn more about {first_name + " " + last_name}
      </Link>
    </div>
  );
};

Trainer.propTypes = {
  data: PropTypes.object
};

export default Trainer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { servicesArr } from "../constants";
import LaterAvatar from "../components/LaterAvatar";

const Trainer = ({ trainer }) => {
  const {
    id,
    first_name,
    last_name,
    city,
    country,
    services,
    avatar_url,
    business_name
  } = trainer;
  const [isValidUrl, setIsValidUrl] = useState(true);

  return (
    <div className="trainers__item">
      <div className="trainers__main">
        <div className="trainers__pic">
          {isValidUrl && avatar_url ? (
            <img src={avatar_url} alt="" onError={e => setIsValidUrl(false)} />
          ) : (
            <LaterAvatar first_name={first_name} last_name={last_name} />
          )}
        </div>
        <div className="trainers__bio">
          <h5>{first_name + " " + last_name}</h5>
          <h6>{business_name}</h6>
        </div>
        <p className="trainers__geo">
          {city && country ? city + ", " + country : "Online Trainer"}
        </p>
      </div>
      <div className="trainers__spec">
        <span>Certifications: </span>
        <div>
          {services.map((service, index) => (
            <span className="trainers__spec_item" key={index}>
              {servicesArr[service].value}
              {index !== services.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>
      <div className="trainers__spec">
        <span className="specialities">Specialities: </span>
        <div>
          {services.map((service, index) => (
            <span className="trainers__spec_item" key={index}>
              {servicesArr[service].value}
              {index !== services.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>
      <Link to={`/trainer/${id}`}  className="trainers__link">
        Learn more about {first_name + " " + last_name}
      </Link>
    </div>
  );
};

Trainer.propTypes = {
  data: PropTypes.object
};

export default Trainer;

import React, { useEffect, Fragment } from "react";
import Config from "../config";
import { useFetch, useQuery } from "../hooks";
import { servicesArr } from "../constants";

// Components
import Trainer from "../components/Trainer";
import Loader from "../components/Loader";

const Trainers = ({ history, location }) => {
  const query = useQuery(location.search);

  const country = query.get("country");
  const city = query.get("city");
  const service = query.get("service");

  const [data, loading] = useFetch(
    service
      ? `${Config.API_URL}/trainers/${service}`
      : `${Config.API_URL}/trainers?country=${country}${
          city ? `&city=${city}` : ""
        }`
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const getParamsType = () => {
    if (service && servicesArr[service]) {
      return `Service Type: ${servicesArr[service].value}`;
    } else if (country && !city) {
      return `Country: ${country}`;
    } else if (country && city) {
      return `City: ${city}`;
    }
  };

  return (
    <section className="trainers">
      {loading && <Loader />}
      <div className="container">
        <div className="page__back" onClick={() => history.push("/")}>
          <img src="/images/arrowBack.svg" alt="" />
          <span>Back</span>
        </div>
        {data.length ? (
          <Fragment>
            <div className="page__mainTitle">
              <h1>Available Trainers</h1>
              <div className="page__country">{getParamsType()}</div>
            </div>
            <div className="trainers__items">
              {data.map(trainer => (
                <Trainer trainer={trainer} key={trainer.id} />
              ))}
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Trainers;

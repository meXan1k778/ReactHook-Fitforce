import React, { useEffect, useState } from "react";
import Config from "../config";
import { useFetch } from "../hooks";

// Components
import Trainer from "../components/Trainer";
import Loader from "../components/Loader";

const Trainers = ({ history, match, location }) => {
  const [data, loading] = useFetch(`${Config.API_URL}/trainers`, "POST", {
    country: match.params.servece
  });

  console.log("data", data);
  useEffect(() => {
    // setFilter(match.params.servece);
    window.scroll(0, 0);
  }, [match.params.servece]);

  // const [filter, setFilter] = useState({});

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
    <section className="trainers">
      {loading && <Loader />}
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
          {data.map(trainer => {
            // if (
            //   elem.specialities.match(filter) ||
            //   elem.location.match(filter)
            // ) {
            return <Trainer data={trainer} />;
            // }
            // return <div />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Trainers;

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

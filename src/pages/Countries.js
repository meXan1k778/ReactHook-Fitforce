import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Config from "../config";
import { useFetch } from "../hooks";
import { Helmet } from "react-helmet";

// Componenst
import Loader from "../components/Loader";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [data, loading] = useFetch(`${Config.API_URL}/countrycities`, "GET");

  useEffect(() => {
    window.clear && window.clear();
    window.scroll(0, 0);
    const countries = Object.keys(data);
    setCountries(countries);
  }, [data]);

  const formatFlugUrl = countryName => {
    let countryFormat = countryName.replace(" ", "-").toLowerCase();
    if (countryName === "United Kingdom") {
      countryFormat = "great-britain";
    } else if (countryName === "United States") {
      countryFormat = "usa";
    }
    return `https://img.icons8.com/color/48/000000/${countryFormat}-circular.png`;
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Browse Available FitForce.com Trainers</title>
        <meta
          name="keywords"
          content="list all services and all cities and all countries"
        />
      </Helmet>
      <section className="countries">
        {loading && <Loader />}
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
              to={{
                pathname: "/trainers/",
                search: "?service=Online Coaching"
              }}
              className="countries__service"
            >
              Online Coaching
            </Link>
            <Link
              to={{
                pathname: "/trainers/",
                search: "?service=Health and fitness training"
              }}
              className="countries__service"
            >
              Health and fitness training
            </Link>
            <Link
              to={{
                pathname: "/trainers/",
                search: "?service=Yoga and Pilates"
              }}
              className="countries__service"
            >
              Yoga and Pilates
            </Link>
            <Link
              to={{
                pathname: "/trainers/",
                search: "?service=Yoga and Pilates"
              }}
              className="countries__service ml25px"
            >
              Diet and nutrition
            </Link>
            <Link
              to={{
                pathname: "/trainers/",
                search: "?service=Yoga and Pilates"
              }}
              className="countries__service ml25px"
            >
              Physiotherapy
            </Link>
            <Link
              to={{
                pathname: "/trainers/",
                search: "?service=Yoga and Pilates"
              }}
              className="countries__service ml25px"
            >
              Other
            </Link>
          </div>

          <div className="page__mainTitle">
            <h1>Select Country & City</h1>
          </div>
          <div className="countries__items">
            {countries.length
              ? countries.map(country => {
                  return (
                    <div className="countries__item" key={country}>
                      <div className="countries__country">
                        <div className="countries__flag">
                          <img src={formatFlugUrl(country)} alt="" />
                        </div>
                        <h6>
                          <Link
                            to={{
                              pathname: `/trainers`,
                              search: `?country=${country}`,
                              type: "country"
                            }}
                          >
                            {country}
                          </Link>
                        </h6>
                      </div>
                      <div className="countries__cities">
                        {data[country].map(city => (
                          <Link
                            key={city}
                            to={{
                              pathname: "/trainers",
                              search: `?country=${country}&city=${city}`,
                              type: "city"
                            }}
                            className="countries__city"
                          >
                            {city}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Countries;

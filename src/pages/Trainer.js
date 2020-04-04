import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Config from "../config";
import { useFetch } from "../hooks";
import { servicesArr } from "../constants";

// Componenst
import Loader from "../components/Loader";
import LaterAvatar from "../components/LaterAvatar";

const Trainer = ({ match, history }) => {
  const [data, loading] = useFetch(`${Config.API_URL}/trainer`, "POST", {
    id: match.params.id
  });

  const [isValidUrl, setIsValidUrl] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
  }, [data]);

  return (
    <Fragment>
      <section className="trainer">
        {loading && <Loader />}

        <div className="container">
          <div className="page__back" onClick={() => history.goBack()}>
            <img src="/images/arrowBack.svg" alt="" />
            <span>Back</span>
          </div>
          {data.length ? (
            <div className="trainer__wrap">
              <div className="trainer__main">
                <h1>
                  {data[0].first_name + " " + data[0].last_name}{" "}
                  {data[0].business_name && "/ " + data[0].business_name}
                </h1>
                <p className="d-none d-md-block">
                  {!data[0].city || (!data[0].country && "Online Trainer")}
                  {data[0].country && data[0].city && (
                    <Link
                      to={{
                        pathname: `/trainers`,
                        search: `?country=${data[0].country}`,
                        type: "country"
                      }}
                    >
                      {data[0].country}
                    </Link>
                  )}
                  {data[0].city && data[0].country && (
                    <Link
                      to={{
                        pathname: "/trainers",
                        search: `?country=${data[0].country}&city=${data[0].city}`,
                        type: "city"
                      }}
                    >
                      {", " + data[0].city}
                    </Link>
                  )}
                </p>
                {data[0].certificates && data[0].certificates.length && (
                  <div className="trainer__certs">
                    <img src="/images/quality.svg" alt="" />
                    <p>{data[0].certificates.length} Certificates</p>
                  </div>
                )}
              </div>
              <div className="trainer__pic">
                {isValidUrl && data[0].avatar_url ? (
                  <img
                    src={data[0].avatar_url}
                    alt=""
                    onError={e => setIsValidUrl(false)}
                  />
                ) : (
                  <LaterAvatar
                    first_name={data[0].first_name}
                    last_name={data[0].last_name}
                  />
                )}
              </div>
              <div className="trainer__about">
                <div className="trainer__item trainer__item_mob">
                  <h6>City</h6>
                  <p>
                    {!data[0].city || (!data[0].country && "Online Trainer")}
                    {data[0].country && data[0].city && (
                      <Link
                        to={{
                          pathname: `/trainers`,
                          search: `?country=${data[0].country}`,
                          type: "country"
                        }}
                      >
                        {data[0].country}
                      </Link>
                    )}
                    {data[0].city && data[0].country && (
                      <Link
                        to={{
                          pathname: "/trainers",
                          search: `?country=${data[0].country}&city=${data[0].city}`,
                          type: "city"
                        }}
                      >
                        {", " + data[0].city}
                      </Link>
                    )}
                  </p>
                </div>
                <div className="trainer__item trainer__item_desktop">
                  <h6>Certifications</h6>
                  <p>
                    {data[0].certificates &&
                      data[0].certificates.length &&
                      data[0].certificates.map((certificate, index) => (
                        <span className="trainers__spec_item" key={index}>
                          {certificate.value}
                          {index !== data[0].services.length - 1 && ", "}
                        </span>
                      ))}
                  </p>
                </div>
                <div className="trainer__item">
                  <h6>Services</h6>
                  <p>
                    {data[0].services.map((service, index) => (
                      <Link
                        key={index}
                        to={{
                          pathname: "/trainers/",
                          search: `?service=${service}`
                        }}
                      >
                        {servicesArr[service].value}
                        {index !== data[0].services.length - 1 && ", "}
                      </Link>
                    ))}
                  </p>
                </div>
                <div className="trainer__item">
                  <h6>About</h6>
                  <p>{data[0].about}</p>
                </div>
                <div className="trainer__socials">
                  {data[0].facebook_url && (
                    <a
                      target="_target"
                      href={`https://www.facebook.com/${data[0].facebook_url}`}
                      className="trainer__social"
                    >
                      <img src="/images/ff.svg" alt="" />
                    </a>
                  )}
                  {data[0].instagram_url && (
                    <a
                      target="_target"
                      href={`https://www.instagram.com/${data[0].instagram_url}`}
                      className="trainer__social"
                    >
                      <img src="/images/ii.svg" alt="" />
                    </a>
                  )}
                  {data[0].twitter_url && (
                    <a
                      target="_target"
                      href={`https://www.twitter.com/${data[0].twitter_url}`}
                      className="trainer__social"
                    >
                      <img src="/images/tt.svg" alt="" />
                    </a>
                  )}
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
          ) : (
            ""
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Trainer;

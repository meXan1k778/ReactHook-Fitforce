import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { servicesArr } from "../constants";
import LaterAvatar from "../components/LaterAvatar";
// import PropTypes from "prop-types";

// Components

// Actions
import { test } from "../actions/test";

const data = {
  id: "auth0|5e7ad3200cf8140c66c3b4ef",
  email: "evan_rams@outlook.com",
  phone: "+1 519 617 4020",
  first_name: "Evan",
  last_name: "Ramsey",
  address: "185 Berkshire Drive, London, ON, Canada",
  currency: "USD",
  tax_rate: "0.00",
  avatar_url:
    "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1030271930679254&height=50&width=50&ext=1582139284&hash=AeR8HocR0xQJbduV",
  about:
    "I am a certified personal trainer who does both online and in person training but due to the situation at hand am wanting to help people stay active and eat better especially when we are isolated from our daily life’s.  I would love to help you. ",
  time_zone: "America/Toronto",
  length_unit: "inch",
  weight_unit: "lbs",
  invoice_counter: 0,
  services: [5, 0],
  subscription_plan: "beta_release_plan",
  marketplace_status: false,
  marketplace_enabled: false,
  timestamp_created: 1585107801,
  timestamp_updated: 1585108277,
  paypal_business_email: null,
  email_subscription_status: null,
  plan_cost_in_cents: null,
  plan_clients_limit: null,
  invitation_code: "5ylha25",
  certificates: null,
  latitude: 42.9641254,
  longitude: -81.2891616,
  place_id: "ChIJE-cOta7xLogRq78iwGGG-zg",
  public_address: "London, Ontario, Canada",
  public_profile_status: "enabled",
  business_name: null,
  twitter_url: null,
  facebook_url: "EvanAnytimeFitness",
  instagram_url: "AfRamseyfit",
  country: "Canada",
  city: "London"
};

const Trainer = ({ history }) => {
  const {
    first_name,
    last_name,
    business_name,
    city,
    country,
    about,
    services,
    facebook_url,
    instagram_url,
    twitter_url,
    avatar_url
  } = data;

  const [isValidUrl, setIsValidUrl] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <section className="trainer">
        <div className="container">
          <div className="page__back" onClick={() => history.goBack()}>
            <img src="/images/arrowBack.svg" alt="" />
            <span>Back</span>
          </div>
          <div className="trainer__wrap">
            <div className="trainer__main">
              <h1>
                {first_name + " " + last_name}{" "}
                {business_name && "/ " + business_name}
              </h1>
              <p className="d-none d-md-block">
                {!city || (!country && "Online Trainer")}
                {country && city && (
                  <Link
                    to={{
                      pathname: `/trainers`,
                      search: `?country=${country}`,
                      type: "country"
                    }}
                  >
                    {country}
                  </Link>
                )}
                {city && country && (
                  <Link
                    to={{
                      pathname: "/trainers",
                      search: `?country=${country}&city=${city}`,
                      type: "city"
                    }}
                  >
                    {", " + city}
                  </Link>
                )}
              </p>
              <div className="trainer__certs">
                <img src="/images/quality.svg" alt="" />
                <p>10 Certificates</p>
              </div>
            </div>
            <div className="trainer__pic">
              {isValidUrl ? (
                <img
                  src={avatar_url}
                  alt=""
                  onError={e => setIsValidUrl(false)}
                />
              ) : (
                <LaterAvatar first_name={first_name} last_name={last_name} />
              )}
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
                  {services.map((service, index) => (
                    <Link
                      to={{
                        pathname: "/trainers/",
                        search: `?service=${service}`
                      }}
                    >
                      {servicesArr[service].value}
                      {index !== services.length - 1 && ", "}
                    </Link>
                  ))}
                </p>
              </div>
              <div className="trainer__item">
                <h6>About</h6>
                <p>{about}</p>
              </div>
              <div className="trainer__socials">
                {facebook_url && (
                  <a
                    target="_target"
                    href={`https://www.facebook.com/${facebook_url}`}
                    className="trainer__social"
                  >
                    <img src="/images/ff.svg" alt="" />
                  </a>
                )}
                {instagram_url && (
                  <a
                    target="_target"
                    href={`https://www.instagram.com/${instagram_url}`}
                    className="trainer__social"
                  >
                    <img src="/images/ii.svg" alt="" />
                  </a>
                )}
                {twitter_url && (
                  <a
                    target="_target"
                    href={`https://www.twitter.com/${twitter_url}`}
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
        </div>
      </section>
    </Fragment>
  );
};

export default Trainer;

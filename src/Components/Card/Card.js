import React from "react";
import "./card.css";
import pricing from "../../Images/pricing.svg";
import tour from "../../Images/tour.svg";
import discover from "../../Images/discover.svg";

const Card = () => {
  return (
    <>
      <div className="break-line"></div>
      <div className="card">
        <div className="col-4">
          <div className="holder-left">
            <img src={pricing} alt="" />
          </div>
          <div className="holder-right">
            <h3>See Trello pricing</h3>
            <p>
              Whether you’re a team of 2 or 2,000, Trello can be customized for
              your organization. Explore which option is best for you.
            </p>
            <span>
              <button className="bt">Compare pricing</button>
            </span>
          </div>
        </div>
        <div className="col-4">
          <div className="holder-left">
            <img src={tour} alt="" />
          </div>
          <div className="holder-right">
            <h3>What is Trello?</h3>
            <p>
              Trello is the visual tool that empowers your team to manage any
              type of project, workflow, or task tracking.
            </p>
            <span>
              <button className="bt">Tour Trello</button>
            </span>
          </div>
        </div>
        <div className="col-4">
          <div className="holder-left">
            <img src={discover} alt="" />
          </div>
          <div className="holder-right">
            <h3>Discover Trello Enterprise</h3>{" "}
            <p>
              The productivity tool teams love, paired with the features and
              security needed for scale.
            </p>
            <span>
              <button className="bt">Learn More</button>
            </span>
          </div>
        </div>
      </div>
      <div className="break-line"></div>
    </>
  );
};

export default Card;

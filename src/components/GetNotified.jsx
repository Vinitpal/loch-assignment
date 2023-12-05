import React from "react";
import eyeIcon from "/eye-icon.svg";
import bellIcon from "/bell-icon.svg";
import bellBlackIcon from "/bell-black-icon.svg";
import clockIcon from "/clock-icon.svg";
import barsIcon from "/bars-icon.svg";

const GetNotified = () => {
  return (
    <div className="get-notified">
      <div className="text-content">
        {/* icon */}
        <img src={bellIcon} alt="bell icon" />
        {/* heading */}
        <h2>Get notified when a highly correlated whale makes a move</h2>
        {/* description */}
        <p>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={bellBlackIcon} alt="bell icon" />
          <h3>We’ll be sending notifications to you here</h3>
          <input type="text" />
          <button>Save</button>
        </div>
        <div className="card">
          <img src={barsIcon} alt="bars icon" />
          <div className="text">
            <p>Notify me when any wallets move more than</p>
            <select name="" id="">
              <option value="">$100,000</option>
              <option value="">$200,000</option>
              <option value="">$300,000</option>
              <option value="">$400,000</option>
              <option value="">$500,000</option>
            </select>
          </div>

          <input className="checkbox" type="checkbox" />
        </div>
        <div className="card">
          <img src={clockIcon} alt="clock icon" />

          <div className="text">
            <p>Notify me when any wallet dormant for</p>

            <select name="" id="">
              <option value="">$100,000</option>
              <option value="">$200,000</option>
              <option value="">$300,000</option>
              <option value="">$400,000</option>
              <option value="">$500,000</option>
            </select>

            <p>becomes active</p>
          </div>

          <input className="checkbox" type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default GetNotified;

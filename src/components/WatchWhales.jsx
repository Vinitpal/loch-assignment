import React from "react";
import whale from "/whale.png";
import eyeIcon from "/eye-icon.svg";

const WatchWhales = () => {
  return (
    <div className="watch-whales">
      <img className="app-screen" src={whale} alt="whale pic" />

      <div className="text-content">
        <img src={eyeIcon} alt="bell icon" />

        <h2>Get notified when a highly correlated whale makes a move</h2>

        <p>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
    </div>
  );
};

export default WatchWhales;

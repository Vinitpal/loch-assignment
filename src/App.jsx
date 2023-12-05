import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import eyeIcon from "/eye-icon.svg";
import bellIcon from "/bell-icon.svg";
import bellBlackIcon from "/bell-black-icon.svg";
import clockIcon from "/clock-icon.svg";
import barsIcon from "/bars-icon.svg";
import logo from "/logo.svg";
import validator from "validator";

import whale from "/whale.png";

import "./App.css";

function App() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const checkEmail = () => {
    const check = validator.isEmail(email);
    console.log(email, check);
    setError(!check);

    if (check) {
      // redirect to another website in new tab
      window.open("https://app.loch.one/welcome", "_blank");
    }
  };

  return (
    <div className="home">
      <div className="left">
        {/* get notified */}
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

        {/* watch whales */}
        <div className="watch-whales">
          {/*  img */}
          <img className="app-screen" src={whale} alt="whale pic" />

          <div className="text-content">
            {/* icon */}
            <img src={eyeIcon} alt="bell icon" />
            {/* heading */}
            <h2>Get notified when a highly correlated whale makes a move</h2>
            {/* description */}
            <p>
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h2>Testimonials</h2>

          <div className="container">
            {/* logo */}
            <img src={logo} alt="loch logo" />

            <div className="cards-container">
              <div className="card">
                <div className="text">
                  <h4>User Name</h4>
                  <p>Ex Blackrock pm</p>
                </div>

                <p className="review-text">
                  “Love how Loch integrates portfolio analytics and whale
                  watching into one unified app.”
                </p>
              </div>
              <div className="card">
                <div className="text">
                  <h4>User Name</h4>
                  <p>Ex Blackrock pm</p>
                </div>

                <p className="review-text">
                  “Love how Loch integrates portfolio analytics and whale
                  watching into one unified app.”
                </p>
              </div>
              <div className="card">
                <div className="text">
                  <h4>User Name</h4>
                  <p>Ex Blackrock pm</p>
                </div>

                <p className="review-text">
                  “Love how Loch integrates portfolio analytics and whale
                  watching into one unified app.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        {/* heading */}
        <h2>Sign up for exclusive access</h2>
        {/* email form */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(false);
          }}
        />
        {error && <p className="error"> please enter valid email</p>}
        <button onClick={() => checkEmail()}>Get started</button>
        {/* text */}
        <p>You’ll receive an email with an invite link to join.</p>
      </div>
    </div>
  );
}

export default App;

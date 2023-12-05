import React from "react";
import logo from "/logo.svg";

const TestimonialCard = () => {
  return (
    <div className="card">
      <div className="text">
        <h4>User Name</h4>
        <p>Ex Blackrock pm</p>
      </div>

      <p className="review-text">
        “Love how Loch integrates portfolio analytics and whale watching into
        one unified app.”
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>

      <div className="container">
        {/* logo */}
        <img src={logo} alt="loch logo" />

        <div className="cards-container">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

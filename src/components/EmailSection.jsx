import React, { useState } from "react";
import validator from "validator";

const EmailSection = () => {
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
    <>
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
    </>
  );
};

export default EmailSection;

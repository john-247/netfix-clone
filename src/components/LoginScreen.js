import React, { useState } from "react";
import "../styles/loginScreen.css";
import netflix from "../netflix.png";
import SignupScreen from "./SignupScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__bg">
        <img className="loginScreen__logo" src={netflix} alt="" />
        <button
          onClick={() => {
            setSignIn(true);
          }}
          className="loginScreen__button"
        >
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter our email to create or restart our
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default LoginScreen;

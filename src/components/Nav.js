import React, { useEffect, useState } from "react";
import "../styles/nav.css";
import netflix from "../netflix.png";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="nav__logo"
          src={netflix}
          alt=""
        />

        <img
          onClick={() => {
            history.push("/profile");
          }}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Nav;

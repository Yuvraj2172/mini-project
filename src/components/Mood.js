import React from "react";
import "./Mood.css";
import logo from "./716428.png";

const Mood = () => {
  return (
    <div className="main">
      <div className="pick">Pick your type</div>
      <div className="types">
        <ul className="choice-list">
          <li className="choice1">Slice of Life</li>
          <li className="choice2">Comedy</li>
          <li className="choice3">Action</li>
          <li className="choice4">Psychological</li>
          <li className="choice5">horror</li>
          <li className="choice6">romance</li>
          <li className="choice7">supernatural</li>
        </ul>
      </div>
      <div className="content">
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="item">
          <img src={logo} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Mood;

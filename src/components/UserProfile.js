import React from "react";
import AddProgress from "./AddProgress.js";
import { useState, useEffect } from "react";
import ResetBtn from "./ResetBtn.js";
import img1 from "../imgs/dumbbell.png";
import img2 from "../imgs/muscle.png";
import img3 from "../imgs/warming.png";
import arrayToCSV from "../functions/arrayToCSV";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Motivation from "./Motivation";

const UserProfile = ({ userData, days, addData }) => {
  const [goalDays, setGoalDays] = useState(null);
  const [daysToGoal, setDaysToGoal] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [BMI, setBMI] = useState("");
  const [iBMI, setIBMI] = useState("");
  const [WeightLoss, setWeightLoss] = useState("");

  const affirmImages = {
    "Lose Weight": img1,
    "Get Strong": img2,
    "Be Healthy": img3,
  };

  useEffect(() => {
    const goal = userData[2].goalWeight;
    const curr = days.length
      ? days[days.length - 1].weight
      : userData[2].currWeight;
    const daysToGoal = ((curr - goal) / 0.2).toFixed(0);
    setDaysToGoal(daysToGoal);
    setGoalDays(daysToGoal);
    const BMI = (curr / (userData[2].height ^ 2)).toFixed(1);
    const iBMI = (userData[2].currWeight / (userData[2].height ^ 2)).toFixed(1);
    setBMI(BMI);
    setIBMI(iBMI);
    setWeightLoss((userData[2].currWeight - curr).toFixed(1));
    // {(answers.currWeight / (answers.height ^ 2)).toFixed(1)}
  }, []);

  return (
    <div className="user-profile-cmp">
      <h1>Hello {userData[1].userName} </h1>
      <div className="btn-container container my-3 d-flex justify-content-center align-items-center">
        <AddProgress days={days} userData={userData} addData={addData} />

        <Dropdown
          style={{ fontSize: "1.4rem" }}
          onToggle={() => setIsOpen(!isOpen)}
          show={isOpen}
        >
          <DropdownButton
            className="dropdown-btn"
            variant=""
            title="︙"
            id="dropdown-menu-button"
            style={{ "--bs-btn-font-size": "1.3rem!important" }}
          >
            <Dropdown.Item href="#">
              <div
                onClick={() => {
                  arrayToCSV(days);
                }}
              >
                Download to CSV
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              {" "}
              <ResetBtn />{" "}
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>

      <div className="profile-box-container">
        <div className="reminder-box profile-box">
          <h5 className="profile-box-title">Keep going!</h5>
          <p>Remember your goal is to {userData[3].affirm.toLowerCase()}.</p>
          <div className="d-flex justify-content-center gap-3 p-2">
            <img
              style={{ height: "40px" }}
              src={affirmImages[userData[3].affirm]}
            />
          </div>
        </div>

        <div className="reminder-box profile-box">
          <h5 className="profile-box-title">Your journey</h5>
          <div>
            <p>initial BMI: {iBMI}</p>
            <p>current BMI: {BMI}</p>
            <p>weight lost: {WeightLoss} Kg</p>
            <p></p>
          </div>
        </div>

        <div className="countdown-box profile-box">
          <h5 className="profile-box-title">
            <span className="highlight">WeightWin</span> countdown to{" "}
            {userData[2].goalWeight} Kg:
          </h5>
          <span className="days-to-goal">{daysToGoal} days</span>
        </div>

        <div className="motivation-box profile-box">
          <Motivation />
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default UserProfile;

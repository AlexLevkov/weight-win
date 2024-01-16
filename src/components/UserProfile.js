import React from 'react'
import AddProgress from './AddProgress.js'
import { useState , useEffect } from 'react'
import ResetBtn from './ResetBtn.js'
import img1 from '../imgs/dumbbell.png'
import img2 from '../imgs/muscle.png'
import img3 from '../imgs/warming.png'
import arrayToCSV from '../functions/arrayToCSV'
import { Dropdown, DropdownButton } from "react-bootstrap";
import Motivation from './Motivation'



const UserProfile = ({userData,days,addData}) => {
  const [goalDays, setGoalDays] = useState(null)
  const [daysToGoal, setDaysToGoal] = useState(null)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const goal = userData[2].goalWeight
    const curr = days.length ? days[days.length-1].weight : userData[2].currWeight;
    const daysToGoal = ((curr - goal) / 0.2).toFixed(0)
    setDaysToGoal(daysToGoal)
    setGoalDays(daysToGoal)
  },[])

  return (
    <div className='user-profile-cmp mt-5'>
      <h1>Hello {userData[1].userName} </h1>
        <div className="btn-container container my-3 d-flex justify-content-center align-items-center">
        <AddProgress days={days} userData={userData} addData={addData}/>
    
        <Dropdown style={{fontSize: '1.4rem'}} onToggle={() => setIsOpen(!isOpen)} show={isOpen}>
          <DropdownButton
            className="dropdown-btn"
            variant=""
            title="︙"
            id="dropdown-menu-button"
            style={{ "--bs-btn-font-size":"1.3rem!important" }}
          >
            <Dropdown.Item href="#"><div onClick={()=>{arrayToCSV(days)}}>Download to CSV</div></Dropdown.Item>
            <Dropdown.Item href="#"> <ResetBtn/> </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        </div>
      <div className="profile-box-container flex-column flex-md-row d-flex gap-3 mt-3">
        <div className="reminder-box profile-box">
          <h5>Remember your goal and daily affirmation is to {userData[3].affirm}.</h5>
          <div className='d-flex justify-content-center gap-3 p-2'>
            <img style={{height: '40px'}} src={img1} />
            <img style={{height: '40px'}} src={img3} />
          </div>
        </div>
        <div className="countdown-box profile-box">
          <h5>Number of days until you reach your goal of {userData[2].goalWeight} Kg:</h5>
          <h1 className= 'days-to-goal'>{daysToGoal}</h1>
        </div>
        <div className="motivation-box profile-box">
          <Motivation/>
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default UserProfile

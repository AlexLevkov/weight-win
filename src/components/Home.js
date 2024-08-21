import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStart, updateIntro } from "../redux/status";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import service from "../services/storage-service";
import Intro from "../components/Intro";
import UserProfile from "../components/UserProfile";
import GraphCarousel from "../components/GraphCarousel";
import Starter from "../components/Starter";

const Home = () => {
  // const httpLink = process.env.NODE_ENV === 'production' ? '/api/daily/demo' : 'http://localhost:3030/api/daily/demo'
  // const httpLink = 'http://35.158.39.203:3030/api/daily/demo'
  // const httpLink = 'https://WWLB-979479013.eu-central-1.elb.amazonaws.com/api/daily/demo'
  // const httpLink = "http://localhost:2000/api/demo";
  const httpLink = "https://central-server-81cq.onrender.com/api/demo";

  const { data } = useQuery("repoData", () =>
    fetch(httpLink).then((res) => res.json())
  );

  const uniqid = require("uniqid");
  const dispatch = useDispatch();

  // the start is referenced to the landing page
  const { isStart } = useSelector((state) => state.status); // default is true
  // the intro is referenced to the data entry by the user
  const { isIntro } = useSelector((state) => state.status); // default is true

  const [days, setDays] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userData = service.loadFromStorage("userData");
    const daysData = service.loadFromStorage("daysData");
    if (userData) {
      // skips the landing page
      setUserData(userData);
      setDays(daysData);
      dispatch(updateStart(false));
      dispatch(updateIntro(false));
    }
  }, []);

  // user has saved today's progress
  const addData = (data) => {
    setDays(data);
    service.saveToStorage("daysData", data);
  };

  // user has pressed submit and entered the app
  const submitUserData = (data) => {
    const weight = data[2].currWeight;
    const daysData = [{ weight, date: new Date(), id: uniqid() }];
    service.saveToStorage("daysData", daysData);
    setDays(daysData);
    service.saveToStorage("userData", data);
    setUserData(data);
    dispatch(updateIntro(false));
  };

  // user has pressed start demo
  const startDemo = () => {
    const demoUserData = {
      1: { index: 1, userName: "Dear Guest (Demo Version)" },
      2: { index: 2, currWeight: "70", goalWeight: "65" },
      3: { index: 3, affirm: "Be Healthy" },
    };
    setDays(data.days);
    setUserData(demoUserData);
    service.saveToStorage("daysData", data.days);
    service.saveToStorage("userData", demoUserData);
    dispatch(updateIntro(false));
    dispatch(updateStart(false));
  };

  // Activated after "Start wining" button is clicked
  const startIntro = () => {
    dispatch(updateStart(false));
  };

  // reset function
  const restToHomePage = () => {
    if (service.keyInLocalStorage("userData")) return; // will not work if user signed in
    dispatch(updateIntro(true));
    dispatch(updateStart(true));
  };

  return (
    <div>
      {isStart && <Starter onStartDemo={startDemo} onStartIntro={startIntro} />}
      {!isStart && isIntro && <Intro submitUserData={submitUserData} />}
      {!isIntro && userData && (
        <UserProfile days={days} userData={userData} addData={addData} />
      )}
      {!isIntro && days && <GraphCarousel days={days} />}
    </div>
  );
};

export default Home;

// Home page image by vectorjuice on Freepik
// https://www.freepik.com/free-vector/outdoor-workout-training-healthy-lifestyle-open-air-jogging-fitness-activity-male-athlete-running-park-muscular-sportsman-exercising-outdoors-vector-isolated-concept-metaphor-illustration_11663630.htm#query=fitness%20illustration&position=3&from_view=search&track=sph

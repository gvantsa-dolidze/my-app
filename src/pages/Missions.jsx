import { useState, useEffect } from "react";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";
const Missions = () => {
  const [missionsData, setMissionsData] = useState([]);
  const getMissionsData = async () => {
    try {
      const res = await fetch("https://api.spacexdata.com/v3/missions");
      if (!res.ok) {
        throw new Error("response was not ok");
      }
      const data = await res.json();
      // console.log(data);
      setMissionsData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMissionsData();
  }, []);
  return (
    <div className="w-[100%] px-5 pt-5 space-y-10">
      {missionsData.map((missions, index) => (
        <Card key={index} >
          {
            <NavLink to={missions.wikipedia} target="_blank" rel="noreferrer">
              <p>
                <span className="font-bold" >Mission Name: </span>
                {missions.mission_name}
              </p>
              <p>
                <span className="font-bold">Mission Id: </span>
                {missions.mission_id}
              </p>
              <p>
                <span className="font-bold">Description: </span>
                {missions.description}
              </p>
            </NavLink>
          }
        </Card>
      ))}
    </div>
  );
};

export default Missions;

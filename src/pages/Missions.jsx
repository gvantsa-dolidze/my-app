import { useState, useEffect } from "react";

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
  return <div className="w-[100%] px-5 pt-5">
    
      {missionsData.map((missions, index)=>(
<a href="/" key={index}>
  <h2><span>Mission Name:</span>{missions.mission_name}</h2>
  <h2><span>Mission Id:</span>{missions.mission_id}</h2>
  <h2><span>Description:</span>{missions.description}</h2>
</a>
      ))}
    
  </div>;
};

export default Missions;

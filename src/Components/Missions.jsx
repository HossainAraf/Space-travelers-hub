import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, reserveMission, cancelMission } from '../Redux/missionsSlice';
import '../styling/mission.css';

function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const missionsInStore = missions && missions.length > 0;

    if (!missionsInStore && !dataFetched) {
      dispatch(fetchMissions());
      setDataFetched(true);
    }
  }, [missions, dataFetched, dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(reserveMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(cancelMission(missionId));
  };

  return (
    <div className="contain">
      <table id="missionsTable">
        <thead id="top">
          <tr>
            <th className="top">Mission</th>
            <th className="top">Description</th>
            <th className="top">Status</th>
            <th className="top" style={{ visibility: 'hidden' }}>Empty</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <th>{mission.mission_name}</th>
              <td>{mission.description}</td>
              <td>{mission.reserved ? <p className="rlabel">Active Member</p> : <p className="nlabel">NOT A MEMBER</p>}</td>
              <td>
                {mission.reserved ? (
                  <button type="button" className="leavembtn" onClick={() => handleLeaveMission(mission.mission_id)}>
                    Leave Mission
                  </button>
                ) : (
                  <button type="button" className="joinmbtn" onClick={() => handleJoinMission(mission.mission_id)}>
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;

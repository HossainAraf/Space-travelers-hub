import React from 'react';
import { useSelector } from 'react-redux';
import '../styling/myprofile.css';

function MyProfile() {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <div className="summary">
      <div className="joined-missions-rockets">
        <h3>My Missions</h3>
        {joinedMissions.length > 0 ? (
          <ul className="sortedlist">
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        ) : (
          <p>No missions joined yet.</p>
        )}
      </div>
    </div>
  );
}

export default MyProfile;

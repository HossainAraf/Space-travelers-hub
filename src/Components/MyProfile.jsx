// IMPORTS
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import '../styling/myprofile.css';

// RENDER JOINED MISSONS & RESERVED ROCKETS
function MyProfile() {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

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
      <div className="joined-missions-rockets">
        <h3>My Rockets</h3>
        {reservedRockets.length > 0 ? (
          <ul className="sortedlist">
            {reservedRockets.map((rocket) => (
              <li key={rocket.mission_id}>{rocket.name}</li>
            ))}
          </ul>
        ) : (
          <p>No Rockets Reserved Yet.</p>
        )}
      </div>

    </div>
  );
}

export default MyProfile;

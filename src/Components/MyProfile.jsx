// IMPORTS
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Col } from 'react-bootstrap';
import '../styling/myprofile.css';

// RENDER JOINED MISSONS & RESERVED ROCKETS
function MyProfile() {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <Container className="summary">
      <Col className="joined-missions-rockets">
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
      </Col>
      <Col className="joined-missions-rockets">
        <h3>My Rockets</h3>
        {reservedRockets.length > 0 ? (
          <ul className="sortedlist">
            {reservedRockets.map((rocket) => (
              <li key={rocket.rocket_id}>{rocket.name}</li>
            ))}
          </ul>
        ) : (
          <p>No Rockets Reserved Yet.</p>
        )}
      </Col>
    </Container>
  );
}

export default MyProfile;

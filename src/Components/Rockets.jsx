// IMPORTS
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Button, Container, Row, Col,
} from 'react-bootstrap';
import { getRockets, reserveRocket, cancelRocket } from '../Redux/rocketsSlice';
import '../styles/rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  // /GET ROCKETS FROM LOCAL STORAGE
  const storedRockets = JSON.parse(localStorage.getItem('rockets')) || [];

  // MERGE ROCKETS DATA WITH LOCAL STORAGE
  const mergedRockets = rockets.map((rocket) => {
    const storedRocket = storedRockets.find((r) => r.id === rocket.id);
    if (storedRocket) {
      return { ...rocket, reserved: storedRocket.reserved };
    }
    return rocket;
  });

  // Fetch rockets data on page load
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  // Handle reserve/cancel rocket
  const handleReserveRocket = (id, reserved) => {
    // Update the local storage and dispatch the action
    if (reserved) {
      localStorage.setItem(
        'rockets',
        JSON.stringify(mergedRockets.map((rocket) => (
          rocket.id === id ? { ...rocket, reserved: false } : rocket))),
      );
      dispatch(cancelRocket(id));
    } else {
      localStorage.setItem(
        'rockets',
        JSON.stringify(mergedRockets.map((rocket) => (
          rocket.id === id ? { ...rocket, reserved: true } : rocket))),
      );
      dispatch(reserveRocket(id));
    }
  };

  // Show loading, error, or rockets data
  const renderRockets = () => {
    if (mergedRockets.length === 0) {
      return <p>Loading rockets...</p>;
    }

    return mergedRockets.map((rocket) => (
      <Container className="container-rocket" key={rocket.id}>
        <Row>
          <div className="img-rocket">
            <img src={rocket.image} alt={rocket.image} />
          </div>
          <Col>
            <h2>{rocket.name}</h2>
            <Row className="reserved">
              <div className="res">
                {rocket.reserved ? (
                  <h5>Reserved</h5>
                ) : null}
              </div>
              <p>{rocket.description}</p>
            </Row>
            <Button variant="primary" type="button" onClick={() => handleReserveRocket(rocket.id, rocket.reserved)}>
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </Col>
        </Row>
      </Container>
    ));
  };

  return (
    <section>
      {renderRockets()}
    </section>
  );
};

export default Rockets;

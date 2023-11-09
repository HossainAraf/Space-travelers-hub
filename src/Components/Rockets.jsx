import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserveRocket, cancelRocketReservation } from '../Redux/rocketsSlice';
import '../styling/rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelReservation = (id) => {
    dispatch(cancelRocketReservation(id));
  };

  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const rocketsInStore = rockets && rockets.length > 0;

    if (!rocketsInStore && !dataFetched) {
      dispatch(fetchRockets());
      setDataFetched(true);
    }
  }, [rockets, dataFetched, dispatch]);

  return (
    <div>
      {rockets.map((rocket) => (
        <div className="rocket-card" key={rocket.id}>
          <img className="rocket-image" src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
          <div className="details">
            <h2>{rocket.name}</h2>
            <p>
              {rocket.reserved ? <span className="reserved">Reserved</span> : null}
              {rocket.description}
            </p>
            <div>
              {rocket.reserved ? (<button type="button" className="cancel-button" onClick={() => cancelReservation(rocket.id)}>Cancel Reservation</button>)
                : (<button type="button" className="reserve-button" onClick={() => handleReserveRocket(rocket.id)}>Reserve Rocket</button>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;

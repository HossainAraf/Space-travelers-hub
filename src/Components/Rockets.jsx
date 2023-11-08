// IMPORTS
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket, cancelRocket } from '../redux/rocketsSlice';


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


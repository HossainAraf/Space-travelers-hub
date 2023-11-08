// IMPORTS
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket, cancelRocket } from '../redux/rocketsSlice';


const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  // Fetch rockets data on page load
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

// IMPORTS
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket, cancelRocket } from '../redux/rocketsSlice';

export default function Rockets() {
  return (
    <h2>Hello Rockets</h2>
  );
}

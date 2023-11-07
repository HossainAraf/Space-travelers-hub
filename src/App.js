import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './Components/Rockets';
import Missions from './Components/Missions';
import './App.css';
import Nav from './Components/Nav';
import MyProfile from './Components/MyProfile';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </Router>
  );
}

export default App;

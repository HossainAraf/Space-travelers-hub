import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './Components/Rockets';
import Missions from './Components/Missions';
import './App.css';
import Nav from './Components/Nav';
import MyProfile from './Components/MyProfile';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <div className="App">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="*" element={<div>If page not found it goes here</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

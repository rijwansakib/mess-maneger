import './App.css';
import Home from '././pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile/Profile';
import AddMile from './pages/AddMile/AddMile';
import MessProfile from './pages/MessProfile/MessProfile';
import AddDeposit from './pages/AddDeposit/AddDeposit';
import CreateMess from './pages/CreateMess/CreateMess';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/addmile" element={<AddMile/>} />
          <Route path="/messprofile" element={<MessProfile/>} />
          <Route path="/add-diposit" element={<AddDeposit/>} />
          <Route path="/create-mess" element={<CreateMess/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

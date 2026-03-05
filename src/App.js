import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import WorkerProfile from './Pages/WorkerProfile/WorkerProfile';
import Search from './Pages/SearchWorker/Search';
import Profile from './Pages/Profile/Profile';
import Message from './Pages/Message/Message';

import './App.css';

function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/worker/:id" element={<WorkerProfile />} />
        <Route path="/search/:skill/:location" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;

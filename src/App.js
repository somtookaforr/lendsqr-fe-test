import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './layout/auth/login.tsx';
import Users from './layout/dashboard/users.tsx';
import UserDetails from './layout/dashboard/user_details.tsx';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route exact path='/' element={<Login />} />
        {/* Dashboard Routes */}
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/users/user_details' element={<UserDetails />} />
      </Routes>
    </Router>      
    </div>
  );
}

export default App;
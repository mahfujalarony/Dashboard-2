import React from 'react';
import MainDashboard from './Components/MainDashboard/MainDashboard';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import Scroll from './Components/Scroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
      <Scroll />
        <Routes>
          <Route path='/' element={<MainDashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


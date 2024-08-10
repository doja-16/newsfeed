import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext'; // Import the AuthProvider

import Register from './Components/Register';
import Login from './Components/Login';
import Sports from './Components/Sports';
import Politics from './Components/Politics';
import Home from './Components/Home';
import Meme from './Components/Meme';
import Culture from './Components/Culture';
import Main from './Components/Admin/Main'; // Admin Dashboard
import Navbar from './Components/NavBar';
import Entertainment from './Components/Entertainment';
import LocalNews from './Components/LocalNews';
import Finance from './Components/Finance';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Only render Navbar if not in the admin routes */}
      {!location.pathname.startsWith('/admin') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/memes" element={<Meme />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/Entertainment" element={<Entertainment/>} />
        <Route path="/local" element={<LocalNews/>} />
        <Route path="/finance" element={<Finance/>} />
        <Route path="/admin/*" element={<Main />} /> {/* Note the /* to handle nested routes */}
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppWrapper;

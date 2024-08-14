import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import daily from '../Assets/daily.png';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { useAuth } from './AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('login');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(prevState => !prevState);
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const switchToLogin = () => {
    setModalContent('login');
  };

  const switchToRegister = () => {
    setModalContent('register');
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  return (
    <header className="head">
      <div className='navbar-container'>
        <img className='logo' src={daily} alt='The Hindu' />
        <nav className='main-nav'>
          <ul className='menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/culture'>World</Link></li>
            <li><Link to='/politics'>India</Link></li>
            <li><Link to='/memes'>Technology</Link></li>
            <li><Link to='/sports'>Sports</Link></li>
            <li><Link to='/Entertainment'>Entertainment</Link></li>
            <li><Link to='/finance'>Finance</Link></li>
            <li><Link to='/local'>LocalNews</Link></li>
          </ul>
        </nav>
        <button className='barIcon' onClick={toggleNavbar}>
          {navbarOpen ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
        </button>
        <div className='actions'>
          {user ? (
            <div className="user-dropdown">
              <span className='user-name' onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUserCircle} className="profile-icon"  />
                 {user}
              </span>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout} className="dropdown-item">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className='subscribe' onClick={() => openModal('register')}>SIGN UP</button>
              <button className='login' onClick={() => openModal('login')}>LOGIN</button>
            </>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent === 'login' ? (
          <Login switchToRegister={switchToRegister} onLoginSuccess={closeModal} />
        ) : (
          <Register switchToLogin={switchToLogin} />
        )}
      </Modal>
    </header>
  );
};

export default Navbar;

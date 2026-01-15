import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow" style={{
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)'
    }}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/" style={{
          color: '#667eea',
          fontSize: '1.5rem'
        }}>
          Start Tech
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className="nav-link px-4 py-2 mx-2 fw-semibold" 
                to="/"
                style={({isActive}) => ({
                  color: isActive ? '#fff' : '#667eea',
                  background: isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                  borderRadius: '10px'
                })}
              >
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link px-4 py-2 mx-2 fw-semibold" 
                to="/viewUser"
                style={({isActive}) => ({
                  color: isActive ? '#fff' : '#667eea',
                  background: isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                  borderRadius: '10px'
                })}
              >
                View Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
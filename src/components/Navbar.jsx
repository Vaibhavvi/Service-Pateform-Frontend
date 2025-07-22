// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import { useAuth } from '../store/auth';

const Navbar = () => {
  const { isLogged } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        {/* Brand */}
        <motion.a
          className="navbar-brand"
          href="/"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="technova-text">TechNova</span>
        </motion.a>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <motion.li className="nav-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Link className="nav-link" to="/">Home</Link>
            </motion.li>
            <motion.li className="nav-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <Link className="nav-link" to="/about">About</Link>
            </motion.li>
            <motion.li className="nav-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <Link className="nav-link" to="/contact">Contact</Link>
            </motion.li>

            {isLogged ? (
              <motion.li className="nav-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
                <Link className="btn btn-danger nav-link text-white px-3" to="/logout">Logout</Link>
              </motion.li>
            ) : (
              <>
                <motion.li className="nav-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
                  <Link className="nav-link" to="/login">Login</Link>
                </motion.li>
                <motion.li className="nav-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                  <Link className="nav-link" to="/signup">Signup</Link>
                </motion.li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

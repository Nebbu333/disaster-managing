import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-left">
        <h2>Disaster Relief</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;

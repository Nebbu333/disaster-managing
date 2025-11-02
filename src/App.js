<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Dailynews from "./pages/Dailynews";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dailynews" element={<Dailynews />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
=======
import React from 'react';

import AdminDashboard from './page/admindashboard'; // Make sure your file is named AdminDashboard.js with uppercase 'A' and 'D'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Disaster Relief Admin Dashboard</h1>
      </header>
      {/* Render the Admin Dashboard */}
      <AdminDashboard />
    </div>
>>>>>>> feature/admindashboard-page
  );
}

export default App;

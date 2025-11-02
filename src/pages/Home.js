import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import Contact from "./Contact";
import { AboutPreview } from "./About"; // ✅ Import short About section

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Disaster Relief Volunteer System</h1>
        <p>Join us in making a difference when it matters most.</p>
        <Link to="/about" className="explore-btn">
          Explore
        </Link>
      </section>

      {/* ✅ Imported About Section Preview */}
      <section className="about-short">
        <AboutPreview />
        <Link to="/about" className="link-more">
          Click for More →
        </Link>
      </section>

      {/* Contact Form Section */}
      <Contact />

      {/* News Section */}
      <section className="news-section">
        <h2>Daily News</h2>
        <ul>
          <li>Flood relief operation ongoing in Zone A.</li>
          <li>New volunteers registered in Addis Ababa region.</li>
        </ul>
        <Link to="/Dailynews" className="link-more">
          Read More News →
        </Link>
      </section>

      {/* Collaborations */}
      <section className="collab-photos">
        <h2>Our Previous Collaborations</h2>
        <div className="photos"></div>
      </section>
    </motion.div>
  );
};

export default Home;

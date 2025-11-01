import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";
const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="hero">
        <h1>Welcome to Disaster Relief Volunteer System</h1>
        <p>Join us in making a difference when it matters most.</p>
      </section>

      <section className="about-short">
        <h2>About Us</h2>
        <p>
          We connect volunteers and coordinators during disasters to deliver
          rapid, organized responses.
        </p>
        <Link to="/about" className="link-more">
          Click for More →
        </Link>
      </section>

      <section className="news-section">
        <h2>Daily Updates</h2>
        <ul>
          <li>Flood relief operation ongoing in Zone A.</li>
          <li>New volunteers registered in Addis Ababa region.</li>
        </ul>
        <Link to="/testimonials" className="link-more">
          Read More News →
        </Link>
      </section>

      <section className="collab-photos">
        <h2>Our Previous Collaborations</h2>
        <div className="photos">
          <img
            src="https://images.unsplash.com/photo-1623057000049-e220f79c7051?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwY3Jvc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
            alt="Description"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

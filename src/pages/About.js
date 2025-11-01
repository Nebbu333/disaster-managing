import React from "react";
import "./About.css";

/* ✅ Short About Preview – shown on Home page */
export const AboutPreview = () => (
  <div className="about-preview">
    <h2>About Us</h2>
    <p>
      Our Disaster Relief Volunteer System connects communities, volunteers, and
      coordinators to act quickly when emergencies strike. We use technology to
      streamline communication, organize rescue missions, and deliver essential
      aid to affected areas in real time. Together, we ensure that no call for
      help goes unanswered and every volunteer effort counts where it matters
      most.
    </p>
  </div>
);

/* ✅ Full About Page */
const About = () => (
  <div className="about-page">
    <h1>About Our Organization</h1>
    <p>
      The Disaster Relief Volunteer System was built to bring people together in
      times of crisis. Our platform empowers volunteers and responders to
      coordinate faster, communicate better, and save more lives.
    </p>
    <p>
      Through a network of trained individuals and digital tools, we enable
      seamless response operations — from information gathering to relief
      delivery — during floods, fires, earthquakes, and other emergencies.
    </p>
    <p>
      Join us today to become part of a dedicated community working to make
      disaster relief faster, smarter, and more human.
    </p>
  </div>
);

export default About;

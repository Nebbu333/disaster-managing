import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css"; // ✅ Make sure this file is in the same folder

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to access your location.");
        }
      );
    } else {
      alert("Your browser does not support GPS location.");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        latitude: "",
        longitude: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("❌ Failed to send message.");
    }
  };

  return (
    <div className="contact-container">
      <h2>📩 Contact Us</h2>
      <p>
        If there’s an emergency in your area or you’ve witnessed a disaster,
        please contact us immediately.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {formData.latitude && formData.longitude ? (
        <p className="location-info">
          📍 Location captured:
          <br />
          Latitude: {formData.latitude} <br />
          Longitude: {formData.longitude}
        </p>
      ) : (
        <p className="location-info">📡 Getting your location...</p>
      )}
    </div>
  );
}

export default ContactPage;

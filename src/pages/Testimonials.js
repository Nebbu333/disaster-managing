import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Amanuel Tesfaye",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Volunteer Team",
    quote:
      "An amazing system that made our disaster response faster and smarter.",
  },
  {
    id: 2,
    name: "Sara Abebe",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    role: "Community Leader",
    quote:
      "This platform helped us coordinate volunteers efficiently during floods.",
  },
  {
    id: 3,
    name: "Daniel Bekele",
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    role: "Disaster Coordinator",
    quote:
      "The system's notifications and task tracking are incredibly reliable.",
  },
  {
    id: 4,
    name: "Lily Yohannes",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    role: "Volunteer",
    quote:
      "I feel proud to be part of a network that saves lives with technology.",
  },
  {
    id: 5,
    name: "Samuel Kassa",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    role: "Logistics Manager",
    quote: "Managing resources and volunteers has never been easier or faster.",
  },
];

export const TestimonialsPreview = () => (
  <div className="testimonials-preview">
    <h2>What People Say</h2>
    <div className="testimonials-grid">
      {testimonialsData.map((t) => (
        <div key={t.id} className="testimonial-card">
          <img src={t.photo} alt={t.name} className="testimonial-photo" />
          <p className="testimonial-quote">"{t.quote}"</p>
          <p className="testimonial-name">{t.name}</p>
          <p className="testimonial-role">{t.role}</p>
        </div>
      ))}
    </div>
  </div>
);

const Testimonials = () => (
  <div className="testimonials-page">
    <h1>Testimonials</h1>

    {/* 📝 Note above "What People Say" */}
    <div className="testimonials-page-note">
      <p>
        Our volunteers, coordinators, and community members have shared their
        experiences using the Disaster Relief Volunteer System. Their feedback
        highlights how the platform has made disaster response faster, smarter,
        and more coordinated.
      </p>
      <p>
        From organizing emergency resources to managing volunteers efficiently,
        the system has empowered communities to act immediately when every
        second counts.
      </p>
      <p>
        These testimonials reflect real stories of people working together to
        save lives, provide relief, and create stronger, more resilient
        communities.
      </p>
      <p>
        We are proud to showcase these voices and invite you to join our network
        to make disaster relief more effective.
      </p>
    </div>

    {/* Display testimonial cards */}
    <TestimonialsPreview />
  </div>
);

export default Testimonials;

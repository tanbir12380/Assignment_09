import React from "react";
import "./How.css";
import { FaSearch, FaHandshake, FaChalkboardTeacher ,FaStar } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "Discover Skills",
    desc: "Browse skill listings shared by people in your local area and find what you want to learn.",
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: "Request a Swap",
    desc: "View skill details and send a request to connect with the skill provider.",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher />,
    title: "Learn & Share",
    desc: "Attend sessions, exchange knowledge, and grow your skills together.",
  },
   {
    id: 4,
    icon: <FaStar />,
    title: "Rate & Grow",
    desc: "Leave a rating, build trust in the community, and grow your learning network."
  }
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <h2 className="section-title">How SkillSwap Works</h2>
      <p className="section-subtitle">
        Learning and sharing skills is easy with just a few simple steps
      </p>

      <div className="how-grid">
        {steps.map((step,i) => (
          <div  data-aos={i % 2 === 0 ? "flip-left" : "flip-right"} key={step.id} className="how-card">
            <div className="how-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

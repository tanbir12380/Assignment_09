import React from "react";
import "./Skill.css";
import { useNavigate } from "react-router";

const Skill = ({ skill }) => {
  const {
    image,
    skillName,
    rating,
    price
  } = skill;


  const navigate = useNavigate();

  return (
    <div className="skill-card">
      <img src={image} alt={skillName} className="skill-image" />

      <div className="skill-content">
        <h3 className="skill-title">{skillName}</h3>

        <p className="skill-rating">
          ⭐ {rating}
        </p>

        <p className="skill-price">
          ${price} / session
        </p>

        <button  onClick={() => navigate(`/skillDetails/${skill.skillId}`)} className="skill-btn">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Skill;

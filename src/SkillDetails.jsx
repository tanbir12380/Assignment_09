import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./SkillDetails.css";

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        const foundSkill = data.find(
          item => item.skillId === parseInt(id)
        );
        setSkill(foundSkill);
      });
  }, [id]);

  if (!skill) {
    return <p className="loading">Loading skill details...</p>;
  }

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-card">
        <img src={skill.image} alt={skill.skillName} />

        <div className="details-content">
          <h2>{skill.skillName}</h2>

          <p className="category">{skill.category}</p>

          <p className="rating">⭐ {skill.rating}</p>

          <p className="price">${skill.price} / session</p>

          <p className="slots">
            Slots Available: {skill.slotsAvailable}
          </p>

          <p className="description">
            {skill.description}
          </p>

          <div className="provider">
            <h4>Skill Provider</h4>
            <p>{skill.providerName}</p>
            <p>{skill.providerEmail}</p>
          </div>

          <button className="book-btn">
            Request Skill Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;

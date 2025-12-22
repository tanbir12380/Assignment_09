import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./SkillDetails.css";
import Swal from "sweetalert2";

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);


  const dialogRef = useRef();

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




<dialog ref={dialogRef} className="skill-dialog">
  <form
    className="dialog-box"
    onSubmit={(e) => {
      e.preventDefault();
      Swal.fire({
        icon: "success",
        title: "Request Submitted!",
        showConfirmButton: false,
        timer: 1500
      });
      dialogRef.current.close();
    }}
  >
    <h3 className="dialog-title">book a session</h3>

    <input
      type="text"
      placeholder="Your Name"
      className="dialog-input"
      required
    />

    <input
      type="email"
      placeholder="Your Email"
      className="dialog-input"
      required
    />

    <div className="dialog-actions">
      <button
        type="submit"
        className="dialog-submit"
      >
        Submit
      </button>

      <button
        type="button"
        className="dialog-close"
        onClick={() => {
          dialogRef.current.close();
        }}
      >
        Cancel
      </button>
    </div>
  </form>
</dialog>


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

          <button onClick={
            ()=>{
              dialogRef.current.showModal();
            }
          } className="book-btn">
            book a session
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;

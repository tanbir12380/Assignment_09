import React, { useEffect, useState } from "react";
import "./TopProviders.css";

const TopProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("/top.json")
      .then((res) => res.json())
      .then((data) => setProviders(data))
  }, []);

  return (
    <section className="top-rated-section">
      <h2 className="section-title">Top Rated Providers</h2>
      <p className="section-subtitle">
        Learn from trusted experts loved by learners in your community
      </p>

      <div className="providers-grid">
        {providers.map((provider) => (
          <div data-aos="zoom-in" key={provider.id} className="provider-card">
            <img src={provider.image} alt={provider.name} />

            <div className="provider-info">
              <h4>{provider.name}</h4>
              <p className="skill">{provider.skill}</p>

              <div className="provider-stats">
                <span>⭐ {provider.rating}</span>
                <span>{provider.students}+ learners</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProviders;

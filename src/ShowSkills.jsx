import React, { useEffect, useState } from 'react';
import Skill from './Skill';
import "./Skill.css"

const ShowSkills = () => {

  const [skills, setSkills]= useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
          const res = await fetch("/data.json");
          const data = await res.json();
          setSkills(data);
    }

    fetchData();

  })

        

  return (
  <div>
    <h2 className='skill-header'>Start Learning Something New Today</h2>
      <div className='skill-container'>
      {
        skills.map((skill)=>{
          return  <Skill skill={skill} ></Skill>
        })
      }
    </div>
  </div>
  );
};

export default ShowSkills;
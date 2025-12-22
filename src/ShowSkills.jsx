import React, { useEffect, useState } from 'react';
import Skill from './Skill';

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
    <div className='skill-container'>
      {
        skills.map((skill)=>{
          return  <Skill skill={skill} ></Skill>
        })
      }
    </div>
  );
};

export default ShowSkills;
import React from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.css";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1715588659685-fac565ef60bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1758270705518-b61b40527e76?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1716349860341-c3acd056a871?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://i.ibb.co.com/jkgfGDPG/young-students-learning-together-group-study.jpg"
  ];

  return (
   <div className="hero-section">
  {/* Color Overlay */}
  <div className="hero-overlay"></div>

  {/* Hero Text Overlay */}
  <div className="hero-text">
    <h1>Your Next Skill Adventure Starts Here</h1>
    <p>
        From music lessons to coding tutorials, yoga to language exchanges — 
      connect with local talent, learn new skills, and meet amazing people 
      around you. Find your vibe, grow your abilities, and swap skills effortlessly.
    </p>
  </div>

  {/* Swiper Carousel */}
  <Swiper
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    speed={1500}
    loop={true}
    pagination={{ clickable: true }}
    modules={[Autoplay, Pagination]}
    className="hero-swiper"
  >
    {images.map((img, i) => (
      <SwiperSlide key={i}>
        <img src={img} className="hero-slide" />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
};

export default Hero;

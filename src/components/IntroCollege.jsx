import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import collegeVideo from '../assets/main/collegedrone.mp4';
import college_logo from '../assets/main/college_logo.webp';
import { CollegeLogos } from './constants';

const IntroCollege = ({ onClick }) => {
  const [showDept, setShowDept] = useState(false);
  const radius = 230;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDept(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg_video">
        <video autoPlay muted loop playsInline>
          <source src={collegeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="Counselling_code">
        <h2>
        Counselling code : 5865
        </h2>
      </div>

      {showDept && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
      
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
          className="center_section"
        >
          <div className="college_logo">
            <img src={college_logo} alt="College Logo" onClick={onClick}/>
          </div>
          <div className="rotate_ring">
            {CollegeLogos.map((logo, index) => {
              const angle = (360 / CollegeLogos.length) * index;
              const x = radius * Math.cos((angle * Math.PI) / 240);
              const y = radius * Math.sin((angle * Math.PI) / 240);

              return (
                <figure key={index}
                >
                <img
                  src={logo.url}
                  alt={`Partner logo ${index}`}
                  className="rotate_logos dept_rotate_logos" style={{
                    position: 'absolute',
                    top: `calc(50% + ${y}px - 50px)`,
                    left: `calc(50% + ${x}px - 50px)`,
                  }}
                 
                />

                </figure>

              );
             
            })}
          </div>
        </motion.div>
        
      )}
  
    </>
  );
};

export default IntroCollege;

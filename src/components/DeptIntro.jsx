import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import collegeVideo from '../assets/main/collegedrone.mp4';
import college_logo from '../assets/main/college_logo.webp';
import { CollegeLogos, Departments } from './constants';
import { IoArrowBack } from "react-icons/io5";


const DepartIntro = ({ onClick, onSelectDepartment,onBack }) => {
  const [showDept, setShowDept] = useState(true);
  const radius = 230;

  const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1.04,
      x: Math.cos((i * 2 * Math.PI) / Departments.length) * radius,
      y: Math.sin((i * 2 * Math.PI) / Departments.length) * radius,
      transition: { delay: i * 0.2, duration: 0.5, type: 'spring' },
    }),
  };

  return (
    <>
      <div className="bg_video bg_vide_2">
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
        <div
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
          className="center_section center_section_2"
        >
          <div className="college_logo">
            <img src={college_logo} alt="College Logo" onClick={onClick} />
          </div>
          <div className="rotate_ring_2">
            {Departments.map((dept, index) => {
              const angle = (2 * Math.PI * index) / 250;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.img
                  key={index}
                  variants={logoVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  onClick={() => onSelectDepartment(dept)}
                  src={dept.logo}
                  alt={`Department logo ${index}`}
                  className="rotate_logos rotate_logos_2"
                  style={{
                    position: 'absolute',
                    top: `calc(39% + ${y}px)`,
                    left: `calc(31% + ${x}px)`,
                    transform: 'translate(-10%, -20%)',
                  }}

                />
              );
            })}
          </div>

        </div>
      )}
       <div className="back_icon" onClick={onBack}>
              <IoArrowBack />
            </div>
    </>
  );
};

export default DepartIntro;

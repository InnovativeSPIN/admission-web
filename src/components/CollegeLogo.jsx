import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import '../styles/Collegelogo.css';

import collegeLogo from '../assets/College_logo.webp';
import collegeVideo from '../assets/drone/collegedrone.mp4';

import infosysLogo from '../assets/front/infosys.png';
import isoLogo from '../assets/front/iso.png';
import isteLogo from '../assets/front/istelogo.webp';
import naaclogo from '../assets/front/naac.png';
import nptellogo from '../assets/front/nptel.jpg';

const CollegeVideo = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -2,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={collegeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const CollegeLogo = ({ onClick }) => {
  const [showLogo, setShowLogo] = useState(false);

  const logos = [infosysLogo, isoLogo, isteLogo, naaclogo, nptellogo];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <CollegeVideo />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      ></div>

      {showLogo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          onClick={onClick}
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {/* Center College Logo */}
          <img
            src={collegeLogo}
            alt="College Logo"
            style={{ maxWidth: '300px', width: '100%', position: 'relative', zIndex: 2 , cursor: 'pointer'}}
          />

          {/* Rotating Logos */}
          <div className="rotating-ring">
            {logos.map((logo, index) => {
              const angle = (360 / logos.length) * index;
              const radius = 200;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <img
  key={index}
  src={logo}
  alt={`logo-${index}`}
  className="rotating-logo"
  style={{
    position: 'absolute',
    top: `calc(50% + ${y}px - 35px)`,
    left: `calc(50% + ${x}px - 35px)`,
  }}
/>

              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CollegeLogo;

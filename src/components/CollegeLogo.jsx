import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import collegeLogo from '../assets/College_logo.webp';
import collegeVideo from '../assets/drone/collegedrone.mp4'; 

const CollegeVideo = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: -2, 
    }}>
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <CollegeVideo />

      {/* Blur Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backdropFilter: 'blur(1px)', 
        // WebkitBackdropFilter: 'blur(1px)', 
        zIndex: -1,
      }}></div>

     
      {showLogo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="college-logo-container"
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
          <img
            src={collegeLogo}
            alt="College Logo"
            className="college-logo"
            style={{ maxWidth: '300px', width: '100%' }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default CollegeLogo;

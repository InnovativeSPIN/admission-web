import { motion } from 'framer-motion';
import CollegeVideo from '../components/Collegevideo.jsx'; 
import departments from '../data.json';




import fistLogo from '../assets/1.png';
import dept2Logo from '../assets/2.png';
import dept3Logo from '../assets/3.png';
import dept4Logo from '../assets/4.png';
import dept5Logo from '../assets/5.png';
import dept6Logo from '../assets/6.png';
import dept7Logo from '../assets/7.png';

const logoMap = {
  '/assets/1.png': fistLogo,
  '/assets/2.png': dept2Logo,
  '/assets/3.png': dept3Logo,
  '/assets/4.png': dept4Logo,
  '/assets/5.png': dept5Logo,
  '/assets/6.png': dept6Logo,
  '/assets/7.png': dept7Logo,
};

const DepartmentLogos = ({ onSelectDepartment }) => {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: Math.cos((i * Math.PI) / 3.5) * 200,
      y: Math.sin((i * Math.PI) / 3.5) * 200,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="department-logos-container" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      
     
      <CollegeVideo />
     
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,  
        zIndex: -1, 
      }}></div>

      
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        {departments.map((dept, index) => (
          <motion.img
            key={dept.id}
            src={logoMap[dept.logo] || dept.logo}
            alt={dept.name}
            className="dept-logo"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            onClick={() => onSelectDepartment(dept)}
            style={{
              width: '100px',
              height: '100px',
              position: 'absolute',
              left:'310px',
              top:'220px',
              cursor: 'pointer',
              
              
              
            }}
          />
          
        ))}
      </div>
      
      
    </div>
  );
};

export default DepartmentLogos;

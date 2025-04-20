import { motion } from 'framer-motion';
import CollegeVideo from '../components/Collegevideo.jsx'; 
import departments from '../data.json';
import '../styles/Departmentlogo.css';

import collegeLogo from '../assets/College_logo.webp';
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
      x: Math.cos((i * 2 * Math.PI) / departments.length) * 200,
      y: Math.sin((i * 2 * Math.PI) / departments.length) * 200,
      transition: { delay: i * 0.2, duration: 0.5, type: 'spring' },
    }),
  };

  return (
    <div className="department-logos-container">
      <CollegeVideo />
      
      <div className="logo-wrapper">
        <div className="college-logo-container">
          <img
            src={collegeLogo}
            alt="College Logo"
            className="college-logo"
          />
        </div>

        <div className="dept-logos-circle">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentLogos;
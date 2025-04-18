import { motion } from 'framer-motion';
import departments from '../data.json';
import fistLogo from '../assets/fist.png';
import dept2Logo from '../assets/civil.png';
import dept3Logo from '../assets/ece.png';
import dept4Logo from '../assets/eee.png';
import dept5Logo from '../assets/ai.png';
import dept6Logo from '../assets/it.jpg';
import dept7Logo from '../assets/mech.png';

const logoMap = {
  '/assets/fist.png': fistLogo,
  '/assets/civil.png': dept2Logo,
  '/assets/ece.png': dept3Logo,
  '/assets/eee.png': dept4Logo,
  '/assets/ai.png': dept5Logo,
  '/assets/it.jpg': dept6Logo,
  '/assets/mech.png': dept7Logo,
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
    <div className="department-logos-container">
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
  );
};

export default DepartmentLogos;
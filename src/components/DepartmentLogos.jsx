import { motion } from 'framer-motion';
import departments from '../data.json';

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
          src={dept.logo}
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
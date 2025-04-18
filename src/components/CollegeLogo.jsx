import { motion } from 'framer-motion';
import collegeLogo from '../assets/College_logo.webp';

const CollegeLogo = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="college-logo-container"
      onClick={onClick}
    >
      <img src={collegeLogo} alt="College Logo" className="college-logo" />
    </motion.div>
  );
};

export default CollegeLogo;
import { motion } from "framer-motion";

const DepartmentActivities = ({ department, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="activities-container"
    >
      <h2>{department.name} Achievements</h2>
      <ul>
        {department.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
      <button onClick={onBack}>Back to Departments</button>
    </motion.div>
  );
};

export default DepartmentActivities;
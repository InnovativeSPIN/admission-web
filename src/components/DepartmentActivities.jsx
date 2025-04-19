import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import cse1 from '../assets/activities/cse1.jpeg';
import '../styles/DepartmentActivities.css';

// Hardcoded images mapping
export const images = {
  '../assets/activities/cse1.jpeg': cse1,
};

const DepartmentActivities = ({ department, onBack }) => {
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Hardcoded activities data
  const activities = [
    {
      image: cse1,
      text: 'Won first prize in National Coding Competition',
    },
    {
      image: cse1,
      text: 'Conducted a workshop on Artificial Intelligence',
    },
    {
      image: cse1,
      text: 'Published research paper in IEEE Journal',
    },
  ];

  useEffect(() => {
    if (!department?.name) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setVoicesLoaded(true);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (!department?.name || !voicesLoaded) return;

    const utterance = new SpeechSynthesisUtterance(`Welcome to ${department.name} Department`);
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1.2;
    utterance.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice =>
      voice.name.toLowerCase().includes('female') ||
      voice.name.includes('Samantha') ||
      voice.name.includes('Zira') ||
      voice.name.includes('Aria') ||
      voice.name.includes('Google US English Female')
    );
    const fallbackVoice = voices.find(voice => voice.lang === 'en-US') || voices[0];
    utterance.voice = femaleVoice || fallbackVoice;

    console.log('Selected voice:', utterance.voice?.name || 'None');

    const timer = setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 500);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, [department, voicesLoaded]);

  if (!department) return <div className="no-department">No department selected</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="activities-container"
    >
      <h2 className="activities-heading">Department Activities</h2>
      <ul className="activities-list">
        {activities.map((activity, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="activity-item"
            onClick={() => setSelectedActivity(activity)}
          >
            <img
              src={activity.image}
              alt={activity.text}
              className="activity-image"
              onError={(e) => {
                e.target.src = '/assets/sce1.jpeg';
                console.error(`Failed to load image: ${activity.image}`);
              }}
            />
            <span className="activity-text">{activity.text}</span>
          </motion.li>
        ))}
      </ul>
      <button
        onClick={onBack}
        className="back-button"
      >
        Back to Departments
      </button>

      {/* Zoomed Activity Modal */}
      {selectedActivity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={() => setSelectedActivity(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedActivity(null)}
              className="modal-close"
            >
              ✕
            </button>
            <img
              src={selectedActivity.image}
              alt={selectedActivity.text}
              className="modal-image"
              onError={(e) => {
                e.target.src = '/assets/sce1.jpeg';
                console.error(`Failed to load image: ${selectedActivity.image}`);
              }}
            />
            <p className="modal-text">{selectedActivity.text}</p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DepartmentActivities;
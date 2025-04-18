import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DepartmentActivities = ({ department, onBack }) => {
  const [voicesLoaded, setVoicesLoaded] = useState(false);

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

  if (!department) return <div>No department selected</div>;

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

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/DepartmentActivities.css';
import departmentsData from '../data.json';
import CollegeVideo from '../components/Collegevideo.jsx';

// Dynamically import all images
const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg}', { eager: true });
const imageMap = {};
for (const [path, module] of Object.entries(images)) {
  const jsonPath = path.replace('../assets', '../assets');
  imageMap[jsonPath] = module.default;
}

const DepartmentActivities = ({ department, onBack }) => {
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [logoError, setLogoError] = useState(false);
  const [placementErrors, setPlacementErrors] = useState({});
  const [activityErrors, setActivityErrors] = useState({});
  const [achievementErrors, setAchievementErrors] = useState({});
  const [enlargedImage, setEnlargedImage] = useState(null);

  const selectedDepartment = departmentsData.find(
    (dept) => dept.name === department?.name
  );

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

    const timer = setTimeout(() => setIsLoading(false), 500);

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      clearTimeout(timer);
    };
  }, [department]);

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

    const timer = setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 500);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, [department, voicesLoaded]);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setEnlargedImage(null);
  };

  if (!department || !selectedDepartment) return <div className="no-department">No department selected</div>;

  const sections = ['about', 'achievements', 'placements', 'activities'];

  const logoSrc = logoError ? imageMap['/assets/fallback.png'] || '/assets/fallback.png' : imageMap[selectedDepartment.logo] || selectedDepartment.logo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="department-details-container"
    >
      {/* Add CollegeVideo as background */}
      <CollegeVideo />
      
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="department-details-wrapper">
          <motion.div
            className="department-logo-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logoSrc}
              alt={`${department.name} Department Logo`}
              className="department-logo"
              onError={() => {
                setLogoError(true);
                console.error(`Failed to load logo: ${selectedDepartment.logo}`);
              }}
              title={`Visit ${department.name} Department Website`}
            />
          </motion.div>

          <div className="department-info">
            <h2 className="department-heading">{department.name} Department</h2>
            
            <div className="section-tabs">
              {sections.map((section) => (
                <button
                  key={section}
                  className={`tab-button ${activeSection === section ? 'active' : ''}`}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <motion.div
              className="section-content"
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === 'about' && (
                <div className="section-text">{selectedDepartment.about || 'No information available'}</div>
              )}
              {activeSection === 'achievements' && (
                <ul className="section-list achievements-list">
                  {selectedDepartment.achievements?.length > 0 ? (
                    selectedDepartment.achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">
                        <div className="achievement-content">
                          <p>{achievement.text}</p>
                          {achievement.image && (
                            <img
                              src={achievementErrors[index] ? imageMap['/assets/fallback.png'] || '/assets/fallback.png' : imageMap[achievement.image] || '/assets/fallback.png'}
                              alt={achievement.text}
                              className="achievement-image"
                              onError={() => setAchievementErrors((prev) => ({ ...prev, [index]: true }))}
                              onClick={() => handleImageClick(imageMap[achievement.image] || '/assets/fallback.png')}
                            />
                          )}
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>No achievements information available</li>
                  )}
                </ul>
              )}
              {activeSection === 'placements' && (
                <ul className="section-list placements-list">
                  {selectedDepartment.placements?.length > 0 ? (
                    selectedDepartment.placements.map((placement, index) => (
                      <li key={index} className="placement-item">
                        <div className="placement-content">
                          <p>{placement.company}</p>
                          {placement.image && (
                            <img
                              src={placementErrors[index] ? imageMap['/assets/fallback.png'] || '/assets/fallback.png' : imageMap[placement.image] || '/assets/fallback.png'}
                              alt={`${placement.company} logo`}
                              className="placement-image"
                              onError={() => setPlacementErrors((prev) => ({ ...prev, [index]: true }))}
                              onClick={() => handleImageClick(imageMap[placement.image] || '/assets/fallback.png')}
                            />
                          )}
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>No placement information available</li>
                  )}
                </ul>
              )}
              {activeSection === 'activities' && (
                <ul className="section-list activities-list">
                  {selectedDepartment.activities?.length > 0 ? (
                    selectedDepartment.activities.map((activity, index) => (
                      <li key={index} className="activity-item">
                        <div className="activity-content">
                          <p>{activity.text}</p>
                          {activity.image && (
                            <img
                              src={activityErrors[index] ? imageMap['/assets/fallback.png'] || '/assets/fallback.png' : imageMap[activity.image] || '/assets/fallback.png'}
                              alt={activity.text}
                              className="activity-image"
                              onError={() => setActivityErrors((prev) => ({ ...prev, [index]: true }))}
                              onClick={() => handleImageClick(imageMap[activity.image] || '/assets/fallback.png')}
                            />
                          )}
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>No activities available</li>
                  )}
                </ul>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {/* Modal for enlarged image */}
      {enlargedImage && (
        <div className="image-modal" onClick={handleCloseModal}>
          <div className="image-modal-content">
            <img src={enlargedImage} alt="Enlarged view" />
            <button className="image-modal-close" onClick={handleCloseModal}>
              ×
            </button>
          </div>
        </div>
      )}

      <button onClick={onBack} className="back-button">
        Back to Departments
      </button>
    </motion.div>
  );
};

export default DepartmentActivities;
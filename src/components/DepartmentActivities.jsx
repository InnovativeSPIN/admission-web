import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import departments from '../acti.json';
import '../styles/DepartmentActivities.css';

// Logo imports from DepartmentLogos for mapping
import fistLogo from '../assets/1.png';
import dept2Logo from '../assets/2.png';
import dept3Logo from '../assets/3.png';
import dept4Logo from '../assets/4.png';
import dept5Logo from '../assets/5.png';
import dept6Logo from '../assets/6.png';
import dept7Logo from '../assets/7.png';

// Logo mapping
const logoMap = {
  '/assets/1.png': fistLogo,
  '/assets/2.png': dept2Logo,
  '/assets/3.png': dept3Logo,
  '/assets/4.png': dept4Logo,
  '/assets/5.png': dept5Logo,
  '/assets/6.png': dept6Logo,
  '/assets/7.png': dept7Logo,
};

const DepartmentActivities = ({ department, onBack }) => {
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [logoError, setLogoError] = useState(false);
  const [dataError, setDataError] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    if (!department?.id) {
      setDataError('No department selected');
      setIsLoading(false);
      return;
    }

    console.log('Incoming department prop:', department);

    try {
      const dept = departments.find(d => d.id === department.id);
      if (!dept) {
        throw new Error(`Department with id ${department.id} not found in acti.json`);
      }
      setSelectedDepartment(dept);
      setIsLoading(false);
      console.log('Matched department from acti.json:', dept);
    } catch (error) {
      setDataError(error.message);
      setIsLoading(false);
      console.error('Error loading department data:', error);
    }

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
  }, [department]);

  useEffect(() => {
    if (!selectedDepartment?.name || !voicesLoaded || dataError) return;

    const utterance = new SpeechSynthesisUtterance(`Welcome to ${selectedDepartment.name} Department`);
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
  }, [selectedDepartment, voicesLoaded, dataError]);

  if (dataError) return <div className="error-message">{dataError}</div>;

  if (!selectedDepartment) return <div className="no-department">No department data available</div>;

  const sections = ['about', 'faculty', 'facilities', 'achievements', 'placements'];

  const logoSrc = logoError ? '/assets/fallback.png' : logoMap[selectedDepartment.logo] || selectedDepartment.logo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="department-details-container"
    >
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="department-details-wrapper">
          {/* Left Side: Department Logo */}
          <motion.div
            className="department-logo-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logoSrc}
              alt={`${selectedDepartment.name} Department Logo`}
              className="department-logo"
              onError={() => {
                setLogoError(true);
                console.error(`Failed to load logo: ${selectedDepartment.logo}`);
              }}
              onClick={() => window.open(`https://www.example.com/${selectedDepartment.name.toLowerCase()}`, '_blank')}
              title={`Visit ${selectedDepartment.name} Department Website`}
            />
          </motion.div>

          {/* Right Side: Department Details */}
          <div className="department-info">
            <h2 className="department-heading">{selectedDepartment.name} Department</h2>
            
            {/* Navigation Tabs */}
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

            {/* Section Content */}
            <motion.div
              className="section-content"
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === 'about' && (
                <div className="section-text about-section">
                  <h3>About the Department</h3>
                  <p>{selectedDepartment.details?.about || 'No information available'}</p>
                </div>
              )}
              {activeSection === 'faculty' && (
                <div className="section-list faculty-section">
                  <h3>Faculty</h3>
                  {selectedDepartment.details?.faculty?.length > 0 ? (
                    <div className="faculty-grid">
                      {selectedDepartment.details.faculty.map((item, index) => (
                        <div key={index} className="faculty-item">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="faculty-image"
                            onError={(e) => {
                              e.target.src = '/assets/fallback.png';
                              console.error(`Failed to load faculty image: ${item.image}`);
                            }}
                          />
                          <p>{item.name}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No faculty information available</p>
                  )}
                </div>
              )}
              {activeSection === 'facilities' && (
                <div className="section-list facilities-section">
                  <h3>Facilities</h3>
                  {selectedDepartment.details?.facilities?.length > 0 ? (
                    <div className="facilities-grid">
                      {selectedDepartment.details.facilities.map((item, index) => (
                        <div key={index} className="facility-item">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="facility-image"
                            onError={(e) => {
                              e.target.src = '/assets/fallback.png';
                              console.error(`Failed to load facility image: ${item.image}`);
                            }}
                          />
                          <p>{item.name}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No facilities information available</p>
                  )}
                </div>
              )}
              {activeSection === 'achievements' && (
                <div className="section-list achievements-section">
                  <h3>Achievements</h3>
                  {selectedDepartment.details?.achievements?.length > 0 ? (
                    <div className="achievements-grid">
                      {selectedDepartment.details.achievements.map((item, index) => (
                        <div key={index} className="achievement-item">
                          <img
                            src={item.image}
                            alt={item.description}
                            className="achievement-image"
                            onError={(e) => {
                              e.target.src = '/assets/fallback.png';
                              console.error(`Failed to load achievement image: ${item.image}`);
                            }}
                          />
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No achievements information available</p>
                  )}
                </div>
              )}
              {activeSection === 'placements' && (
                <div className="section-list placements-section">
                  <h3>Placements</h3>
                  {selectedDepartment.details?.placements?.length > 0 ? (
                    <div className="placements-grid">
                      {selectedDepartment.details.placements.map((item, index) => (
                        <div key={index} className="placement-item">
                          <img
                            src={item.image}
                            alt={item.description}
                            className="placement-image"
                            onError={(e) => {
                              e.target.src = '/assets/fallback.png';
                              console.error(`Failed to load placement image: ${item.image}`);
                            }}
                          />
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No placement information available</p>
                  )}
                </div>
              )}
            </motion.div>
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
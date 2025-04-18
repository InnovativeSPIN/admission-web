import { useState } from 'react';
import CollegeLogo from './components/CollegeLogo';
import DepartmentLogos from './components/DepartmentLogos';
import DepartmentActivities from './components/DepartmentActivities';
import './styles/App.css';

function App() {
  const [view, setView] = useState('college');
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleLogoClick = () => setView('departments');
  const handleSelectDepartment = (dept) => {
    setSelectedDepartment(dept);
    setView('activities');
  };
  const handleBack = () => setView('departments');

  return (
    <div className="app">
      {view === 'college' && <CollegeLogo onClick={handleLogoClick} />}
      {view === 'departments' && (
        <DepartmentLogos onSelectDepartment={handleSelectDepartment} />
      )}
      {view === 'activities' && (
        <DepartmentActivities department={selectedDepartment} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
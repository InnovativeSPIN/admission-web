import React, { useState } from 'react';
import IntroCollege from './components/IntroCollege';
import DeptIntro from './components/DeptIntro';
import Department from './components/Department';
import IntroContent from './components/IntroContent';

function App() {
  const [goDept, setGoDept] = useState(false);
  const [GoIntro, setGoIntro] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setGoDept(true);
  };

  const handleBack = () => {
    setGoDept(true);
    setSelectedDepartment(null);
  };

  const handleBackMain = () => {
    setGoDept(false);
    setGoIntro(false);
    setSelectedDepartment(null);
  };

  return (
    <>
      {GoIntro ? (
        <IntroContent onBack={() => setGoIntro(false)} />
      ) : !goDept ? (
        <IntroCollege onClick={() => setGoDept(true)} />
      ) : selectedDepartment ? (
        <Department department={selectedDepartment} onBack={handleBack} />
      ) : (
        <DeptIntro
          onSelectDepartment={handleDepartmentSelect}
          onClick={() => setGoIntro(true)}
          onBack={handleBackMain}  
        />
      )}
    </>
  );
}

export default App;

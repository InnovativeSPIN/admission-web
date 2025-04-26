import React, { useState } from 'react';
import IntroCollege from './components/IntroCollege';
import DeptIntro from './components/DeptIntro';
import Department from './components/Department';

function App() {
  const [goDept, setGoDept] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setGoDept(true); 
  };

  const handleBack = () => {
    setGoDept(true); 
    setSelectedDepartment(null)
  };
  return (
    <>
      {!goDept ? (
        <IntroCollege onClick={() => setGoDept(true)} />
      ) : selectedDepartment ? (
        <Department department={selectedDepartment}  onBack={handleBack}/>
      ) : (
        <DeptIntro onSelectDepartment={handleDepartmentSelect} />
      )}
    </>
  );
}

export default App;

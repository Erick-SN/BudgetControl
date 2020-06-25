import React, { useState } from 'react';
import Ask from './components/Ask';
function App() {
  const [budget, setBudget] = useState(0);
  const [residuary, setResiduary] = useState(0);
  return (
    <>
      <div className='container'>
        <header>
          <h1>Weekly Expense</h1>
          <div className='contenido-principal contenido'>
            <Ask setBudget={setBudget} setResiduary={setResiduary} />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;

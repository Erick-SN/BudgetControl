import React, { useState } from 'react';
import Ask from './components/Ask';
import Form from './components/Form';
function App() {
  const [budget, setBudget] = useState(0);
  const [residuary, setResiduary] = useState(0);
  const [showAsk, setShowAsk] = useState(true);
  return (
    <>
      <div className='container'>
        <header>
          <h1>Weekly Expense</h1>
          <div className='contenido-principal contenido'>
            {showAsk ? (
              <Ask
                setBudget={setBudget}
                setResiduary={setResiduary}
                setShowAsk={setShowAsk}
              />
            ) : (
              <div className='row'>
                <div className='one-half column'>
                  <Form />
                </div>
                <div className='one-half column'></div>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default App;

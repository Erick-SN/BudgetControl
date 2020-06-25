import React from 'react';
import Ask from './components/Ask';
function App() {
  return (
    <>
      <div className='container'>
        <header>
          <h1>Weekly Expense</h1>
          <div className='contenido-principal contenido'>
            <Ask />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;

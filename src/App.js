import React, { useState, useEffect } from 'react';
import Ask from './components/Ask';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';
function App() {
  const [budget, setBudget] = useState(0);
  const [residuary, setResiduary] = useState(0);
  const [showAsk, setShowAsk] = useState(true);
  const [expenses, setExpense] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  useEffect(() => {
    if (createExpense) {
      setExpense([...expenses, expense]);

      const remainingBudget = residuary - expense.amount;
      setResiduary(remainingBudget);

      setCreateExpense(false);
    }
  }, [expense]);

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
                  <Form
                    saveExpense={saveExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className='one-half column'>
                  <List expenses={expenses} />
                  <BudgetControl budget={budget} residuary={residuary} />
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default App;

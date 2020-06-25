import React, { useState } from 'react';
const Form = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmitExpense = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitExpense}>
        <h2>Add your expenses here</h2>
        <div className='campo'>
          <label>Expense Name</label>
          <input
            type='text'
            className='u-full-width'
            placeholder='Example : Transport'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label>Expense Amount</label>
          <input
            type='number'
            className='u-full-width'
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
          />
        </div>
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Add'
        />
      </form>
    </>
  );
};

export default Form;

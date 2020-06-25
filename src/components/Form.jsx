import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';
const Form = ({ saveExpense, setCreateExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const onSubmitExpense = (e) => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount) || name.trim() === '') {
      setError(true);
      return;
    }
    const expense = {
      name,
      amount,
      id: shortid.generate(),
    };
    saveExpense(expense);
    setCreateExpense(true);
    setName('');
    setAmount(0);
  };

  return (
    <>
      <form onSubmit={onSubmitExpense}>
        <h2>Add your expenses here</h2>
        {error ? <Error message='Oops.. Something went wrong' /> : null}
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

Form.protoTypes = {
  saveExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};

export default Form;

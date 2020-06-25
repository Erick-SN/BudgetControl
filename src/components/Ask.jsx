import React, { useState } from 'react';
import Error from './Error';
const Ask = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const setBudget = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  const onSubmitBudget = (e) => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <>
      <h2>Place your budget :D</h2>
      {error ? <Error message='Incorrect Budget' /> : null}
      <form onSubmit={onSubmitBudget}>
        <input
          type='number'
          className='u-full-width'
          placeholder='place your budget'
          onChange={setBudget}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Submit Budget'
        />
      </form>
    </>
  );
};

export default Ask;

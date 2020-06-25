import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
const Ask = ({ setBudget, setResiduary, setShowAsk }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const Budget = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  const onSubmitBudget = (e) => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }
    setError(false);
    setBudget(amount);
    setResiduary(amount);
    setShowAsk(false);
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
          onChange={Budget}
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

Ask.protoTypes = {
  setBudget: PropTypes.func.isRequired,
  setResiduary: PropTypes.func.isRequired,
  setShowAsk: PropTypes.func.isRequired,
};

export default Ask;

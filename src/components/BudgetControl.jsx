import React from 'react';
const BudgetControl = ({ budget, residuary }) => {
  return (
    <>
      <div className='alert alert-primary'>Budget: ${budget}</div>
      <div className='alert'>Residuary: ${residuary}</div>
    </>
  );
};

export default BudgetControl;

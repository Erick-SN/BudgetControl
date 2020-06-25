import React from 'react';
import { budgetsReview } from '../helpers';
const BudgetControl = ({ budget, residuary }) => {
  return (
    <>
      <div className='alert alert-primary'>Budget: ${budget}</div>
      <div className={budgetsReview(budget, residuary)}>
        Residuary: ${residuary}
      </div>
    </>
  );
};

export default BudgetControl;

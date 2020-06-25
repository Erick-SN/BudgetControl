import React from 'react';
import PropTypes from 'prop-types';
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

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  residuary: PropTypes.number.isRequired,
};

export default BudgetControl;

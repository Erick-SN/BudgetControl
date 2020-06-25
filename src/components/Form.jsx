import React, { useState } from 'react';
const Form = () => {
  return (
    <>
      <h2>Add your expenses here</h2>
      <div className='campo'>
        <label>Expense Name</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Example : Transport'
        />
      </div>
      <div className='campo'>
        <label>Expense Amount</label>
        <input type='number' className='u-full-width' />
      </div>
      <input
        type='submit'
        className='button-primary u-full-width'
        value='Add'
      />
    </>
  );
};

export default Form;

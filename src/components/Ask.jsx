import React from 'react';
const Ask = () => {
  return (
    <>
      <h2>Place your budget :D</h2>
      <form>
        <input
          type='number'
          className='u-full-width'
          placeholder='place your budget'
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

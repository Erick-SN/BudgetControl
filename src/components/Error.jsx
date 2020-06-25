import React from 'react';
import PropTypes from 'prop-types';
const Error = ({ message }) => (
  <p className='alert alert-danger error'>{message}</p>
);

Error.PropTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;

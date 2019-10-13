import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function TextInput(props) {
  const { handleChange } = props;
  return (
    <textarea
      className="customTextArea"
      onBlur={(e) => handleChange(e.target.value)}
    />
  );
}

TextInput.propTypes = {
  handleChange: PropTypes.func,
};

TextInput.defaultProps = {
  handleChange: () => {},
};

export default TextInput;

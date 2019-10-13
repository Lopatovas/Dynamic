import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { handleClick, Text } = props;
  return (
    <button
      onClick={() => handleClick()}
      type="button"
      className="button"
    >
      {Text}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  Text: PropTypes.string,
};

Button.defaultProps = {
  handleClick: () => {},
  Text: '',
};

export default Button;

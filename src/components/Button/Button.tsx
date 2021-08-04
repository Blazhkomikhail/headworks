import React from 'react';
import './button.scss';

interface IButtonProps {
  classList: [] | string;
  text: string;
  handler: () => void;
}

const Button = ({
  classList = '',
  text = 'Button',
  handler,
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={`button ${
        Array.isArray(classList) ? classList.join(' ') : classList
      }`}
      type="button"
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;

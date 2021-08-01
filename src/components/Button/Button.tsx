import React from "react";

interface IButtonProps {
  classList: [] | string;
  text: string;
  handler: () => void;
}

const Button = ({classList, text, handler}: IButtonProps) => {

  return (
    <button 
      className={ Array.isArray(classList) ? classList.join(' ') : classList } 
      type="button"
      onClick={handler}
    >
      {text}
    </button>
  )
}

export default Button;
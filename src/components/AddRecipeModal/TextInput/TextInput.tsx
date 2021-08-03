import React from "react";

type TInputProps = {
  labelName: string;
  name: string;
  value: string;
  handler: (e: React.FormEvent<HTMLInputElement>) => void;
  classList: string | Array<string>;
}

const TextInput = ({labelName, name, value, handler, classList = ''}: TInputProps): JSX.Element => {
  return (
    <label htmlFor={name}>
      {labelName}
      <input 
        className={Array.isArray(classList) ? classList.join(' ') : classList} 
        type="text" 
        name={name} 
        value={value} 
        onChange={handler} />
    </label>
  )
}

export default TextInput;
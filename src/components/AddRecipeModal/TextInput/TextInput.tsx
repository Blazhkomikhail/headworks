import React from "react";

type TInputProps = {
  labelName: string;
  name: string;
  value: string;
  handler: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput = ({labelName, name, value, handler}: TInputProps): JSX.Element => {
  return (
    <label htmlFor={name}>
      {labelName}
      <input type="text" name={name} value={value} onChange={handler} />
    </label>
  )
}

export default TextInput;
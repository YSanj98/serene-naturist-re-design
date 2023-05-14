import { useState } from "react";

type InputProps = {
  label: string;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: number;
  name: string;
  type: string;
  placeholder: string;
  pattern?: string;
  required?: boolean;
  value?: string;
};


const Form = (props: InputProps) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (_e: any) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col mx-4 my-4 md:mx-1 md:my-1">
      <label className=" block text-lg font-medium text-primary-100 mb-1 ">{label}</label>
      <input className="p-4 my-3 rounded border-gray-500 border-2 invalid:focus:border-red-500"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
      />
      <span className="text-xs p-1 text-red-500 hidden invalid:focus:block">{errorMessage}</span>
    </div>
  )
}

export default Form
import React from 'react';

interface IFormInputProps {
  label: string,
  name: string,
  type?: "text" | "number",
  className?: string,
  placeholder: string,
  value: any,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  children?: React.ReactNode
};

function FormInput({label, name, type="text", className, placeholder, value, onChange, children, ...args}:IFormInputProps) {

  return (
    <div className={`${name}_form_input`}>
      <label
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={className}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormInput;
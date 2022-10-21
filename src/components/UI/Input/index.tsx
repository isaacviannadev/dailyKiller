import React, { InputHTMLAttributes, useState } from 'react';
import { InputError, InputField, InputLabel, InputWrapper } from './style';

interface CrossInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  error,
  value,
  onChange,
  ...props
}: CrossInputProps) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <InputField value={inputValue} onChange={handleChange} {...props} />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};

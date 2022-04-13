import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";

interface IInput {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}

const InputText = ({ name, label, type }: IInput) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <p>
      <label>{label}</label>
      <br />
      <input ref={inputRef} name={name} type={type} />
    </p>
  );
};

export { InputText };

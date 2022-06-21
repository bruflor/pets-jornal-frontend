import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";
import "./forms.scss";

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
    <div className="fullInput">
      <label htmlFor={fieldName}>{label}</label>
      <input ref={inputRef} name={name} type={type} />
    </div>
  );
};

export { InputText };

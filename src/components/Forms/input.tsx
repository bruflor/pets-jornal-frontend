import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";
// import { useField } from "@unform/core";

interface Props {
  name: string;
  label?: string;
  type?: string;
}
const Input = ({ name, label, type = "text" }: Props) => {
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
    <div>
      <label for={name}>{label}</label>
      <input ref={inputRef} id={name} type={type} />
    </div>
  );
};

export { Input };

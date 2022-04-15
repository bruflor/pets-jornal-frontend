import { useRef, useEffect } from "react";

import { useField } from "@unform/core";
import { Form } from "@unform/web";

interface IInput {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  children?: JSX.Element;
}

const InputSelect = ({ name, label, type, children }: IInput) => {
  const selectRef = useRef<HTMLInputElement>([]);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: (ref) => {
        return ref.current?.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>

      <select
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        // {...rest}
      >
        {children}
      </select>

      {error && <span className="error">{error}</span>}
    </div>
  );
};

export { InputSelect };

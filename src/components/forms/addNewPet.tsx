import React, { useRef } from "react";
import { FormHandles, SubmitHandler, useField } from "@unform/core";
import { Form } from "@unform/web";
import { InputText } from "./inputText";

interface IForm {
  data: string;
}
const AddNewPet = () => {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };
  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <InputText label="Pet name" name="petname" />
      <button type="submit">Save</button>
    </Form>
  );
};

export { AddNewPet };

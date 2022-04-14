import React, { useRef } from "react";
import { FormHandles, SubmitHandler, useField } from "@unform/core";
import { Form } from "@unform/web";
import { InputText } from "./inputText";
import "./forms.scss";

interface IForm {
  data: string;
}
const AddNewPet = () => {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };
  return (
    <div className="containerForm">
      <h2>Add a Pet</h2>
      <Form className="form" ref={formRef} onSubmit={handleFormSubmit}>
        <InputText label="Pet name" name="petname" />
        <InputText label="Upload a image" name="imgURL" />
        <InputText label="Birthdate" name="birthDate" />
        <InputText label="Breed" name="breed" />
        <InputText label="Weight" name="weight" />
        <InputText label="Unity" name="weightUnity" />
        <InputText label="Gender" name="femaleOrMale" />
        <InputText label="Description" name="description" />

        <button type="submit">Save</button>
      </Form>
    </div>
  );
};

export { AddNewPet };

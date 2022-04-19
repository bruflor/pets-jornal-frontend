import React, { useRef } from "react";
import { FormHandles, SubmitHandler, useField } from "@unform/core";
import { Form } from "@unform/web";
import { InputText } from "./inputText";
import "./forms.scss";
import { InputSelect } from "./inputSelect";
import { Navigate, useNavigate } from "react-router-dom";

interface IForm {
  data: string;
}
const AddNewPet = () => {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };
  const selectGenders = [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
  ];
  const selectUnityWeight = [
    { value: "kg", label: "kg" },
    { value: "lb", label: "lb" },
  ];
  const navigate = useNavigate();

  return (
    <div className="containerForm">
      <h2>Add a Pet</h2>
      <Form className="form" ref={formRef} onSubmit={handleFormSubmit}>
        <InputText label="Pet name" name="petname" />
        <InputText label="Upload a image" name="imgURL" />
        <InputText label="Birthdate" name="birthDate" />
        <InputText label="Breed" name="breed" />
        <div className="inputInLine">
          <InputText label="Weight" name="weight" />
          <InputSelect label="Unity" name="weightUnity">
            <>
              {selectUnityWeight.map((unity) => {
                return (
                  <option key={unity.value} value={unity.value}>
                    {unity.label}
                  </option>
                );
              })}
            </>
          </InputSelect>
        </div>
        <InputSelect label="Gender" name="femaleOrMale">
          <>
            {selectGenders.map((gender) => {
              return (
                <option key={gender.value} value={gender.value}>
                  {gender.label}
                </option>
              );
            })}
          </>
        </InputSelect>
        <InputText label="Description" name="description" />

        <button className="cancelButton" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button className="normalButton" type="submit">
          Save
        </button>
      </Form>
    </div>
  );
};

export { AddNewPet };

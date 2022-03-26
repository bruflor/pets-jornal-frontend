import React, { useEffect, useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Input } from "./input";
import "./style.css";

interface IForm {
  id: string;
  name: string;
  birthDate?: string;
  breed?: string;
  weight?: number | string;
  weightUnity: string;
  //   imgURL: ??
  femaleOrMale: string;
  description?: string;
  //   haveMedicines: string
  //   haveVaccines: string;
  created_at: string;
  owner?: string;
  label?: string;
}

const NewPet = ({ name, birthDate, ...rest }: IForm) => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" label="Pet name" />
        <Input name="birthDate" label="Pet birth date" />
        <Input name="breed" label="Pet breed" />
        <Input name="weight" label="Pet current weight" />
        <Input name="weightUnity" label="" type="radio" />

        <button type="submit">Save Pet</button>
      </Form>
    </div>
  );
};

export { NewPet };

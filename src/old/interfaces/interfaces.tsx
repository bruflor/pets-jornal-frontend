//PetDashboard, Dashboard, Cards
interface IPet {
  id?: string;
  name: string;
  birthDate?: string;
  breed?: string;
  weight?: number | string;
  weightUnity?: string;
  imgURL?: string;
  femaleOrMale?: string;
  description?: string;
  haveMedicines?: string;
  haveVaccines?: string;
  created_at?: string;
  owner?: string;
  label?: string;
}

//PetDashboard
interface IDataCategory {
  typeOfMedicineObj: string;
}

//PetDashboard
interface IMedicinesGroup {
  type: string;
  allMedicines: IProduct[];
}

//PetDashboard
interface IProduct {
  name: string;
  typeOfMediccine?: string;
  laboratory?: string;
  frequency?: string;
}

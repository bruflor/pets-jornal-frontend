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

//PetDataCard
interface Props {
  categoryType: string;
  name?: string;
}

//PetDashboard
interface IDataCategory {
  typeOfMedicineObj: string;
}

//PetDashboard
interface IMedicinesGroup {
  type: string;
  allMedicines: IMedicine[];
}

//PetDashboard
interface IMedicine {
  name: string;
  typeOfMediccine: string;
  laboratory: string;
  frequency: string;
}

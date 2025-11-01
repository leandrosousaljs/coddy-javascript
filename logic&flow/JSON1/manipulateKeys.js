/* Challenge

Create a function named petShelterManager that helps manage a pet shelter system. The function receives two parameters:

shelterData (an array of objects containing information about pets)
newData (an object containing new data)
The shelterData array contains objects with the following structure:

{
  id: "unique-id",
  name: "pet-name",
  type: "animal-type",
  age: number,
  isVaccinated: boolean,
  adoptionStatus: "available" | "adopted"
}
Your function should do the following:

Add the newData object to the shelterData array
Before adding, verify that all required fields (id, name, type, age, isVaccinated, adoptionStatus) exist in newData
If a field is missing, do not add the newData
Return the updated shelterData array */

function petShelterManager(shelterData, newData) {
  // Create a copy of shelterData to avoid modifying the original
  let updatedShelter = [];
  for (let i = 0; i < shelterData.length; i++) {
    updatedShelter.push(shelterData[i]);
  }

  if (
    newData.id === undefined ||
    newData.name === undefined ||
    newData.type === undefined ||
    newData.age === undefined ||
    newData.isVaccinated === undefined ||
    newData.adoptionStatus === undefined
  ) {
    return updatedShelter;
  }

  updatedShelter.push(newData);
  return updatedShelter;
}

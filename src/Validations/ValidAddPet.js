import { addPet } from "../api/pets";
const ValidAddPet = (name, type, image, available) => {
  if (name == "" || name.length < 3)
    return alert("Name cannot be empty or less the 3 char");
  else {
    //post
    addPet(name, type, image, available);
  }
};
export default ValidAddPet;

import { addPet } from "../api/pets";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ValidAddPet = (name, type, image, available) => {
  if (nameValidater(name) || typeValidater(type)) {
    return false;
  } else {
    //post

    console.log("Trueeeeeeeeeeee");
    return true;
  }
};
const nameValidater = (name) => {
  if (name == "" || name.length < 3) {
    alert("Name cannot be empty or less the 3 char");
    return true;
  }
  return false;
};
const typeValidater = (type) => {
  const validTypes = ["CAT", "DOG", "HUMAN"];
  if (!validTypes.includes(type.toUpperCase())) {
    alert("Type is not valid.");
    return true;
  }
  return false;
};
export default ValidAddPet;

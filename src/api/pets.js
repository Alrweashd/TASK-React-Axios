import instance from ".";
// - one for getting all the pets
// - one for getting one pet by ID
// - one for adding a new pet
// - one for updating a pet by ID
// - one for deleting a pet by ID

const getAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getPetById = async (petId) => {
  const res = await instance.get(`/pets/${petId}`);
  return res.data;
};

const addPet = async (name, type, image, adopted) => {
  //   let para = { id: this.id, name: this.name, type: this.type, ad };
  await instance.post("/pets/", {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });
};
const removePetById = async (id) => {
  await instance.delete(`/pets/${id}`);
};

export { getAllPets, getPetById, addPet, removePetById };

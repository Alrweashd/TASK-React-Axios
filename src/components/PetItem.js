import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { removePetById } from "../api/pets";
const PetItem = ({ pet }) => {
  //delete by mutation
  const queryClient = useQueryClient();
  const {
    mutate: deletePet,
    isLoading,
    error,
  } = useMutation({
    mutationFn: removePetById,
    onSuccess: () => {
      queryClient.invalidateQueries(["pets"]);
    },
  });
  if (isLoading) return <h1>Deleting</h1>;

  return (
    <div>
      <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
        <h1 className="text-md font-bold">{pet.name}</h1>
        <img
          src={pet.image}
          alt={`${pet.name}-image`}
          className="w-[200px] rounded-md
            "
        />
        <Link to={`/list/${pet.id}`}>
          <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
            View
          </button>
        </Link>
        <button
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
          onClick={() => deletePet(pet.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PetItem;

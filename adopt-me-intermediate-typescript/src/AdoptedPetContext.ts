import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "",
    animal: "dog",
    description: "",
    breed: "",
    images: [],
    city: "",
    state: "",
  },
  () => {},
]);

export default AdoptedPetContext;

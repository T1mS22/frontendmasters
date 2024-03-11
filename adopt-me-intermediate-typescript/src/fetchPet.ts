import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "./APIResponsesTypes";

const fetchPat: QueryFunction<PetAPIResponse, ["details", string]> = async ({
  queryKey,
}) => {
  const id = queryKey[1];

  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!res.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return await res.json();
};

export default fetchPat;

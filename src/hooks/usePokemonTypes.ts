import { useEffect, useState } from "react";
import { getPokemonTypeList } from "../hooks/apiHandler";
import { NamedAPIResource } from "pokenode-ts";

export const usePokemonTypes = () => {
  //  ./usePokemonList.ts is the "complete" hook that demonstrates proper loading states, error handling, function memoization.
  const [pokemonTypes, setPokemonTypes] = useState<NamedAPIResource[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonTypes = async () => {
      setIsLoading(true);
      try {
        const data = await getPokemonTypeList();
        setPokemonTypes(data);
      } catch (error) {
        console.error("Failed to fetch Pokemon types:", error);
      }
      setIsLoading(false);
    };

    fetchPokemonTypes();
  }, []);

  return { pokemonTypes, isLoading };
};

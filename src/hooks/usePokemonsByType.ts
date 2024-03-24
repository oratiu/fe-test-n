import { useEffect, useState } from "react";
import { fetchPokemonsByType } from "./apiHandler";

export const usePokemonsByType = (pokemonType: string | undefined) => {
  //  ./usePokemonList.ts is the "complete" hook that demonstrates proper loading states, error handling, function memoization.
  const [allowedPokemonsByType, setAllowedPokemonsByType] = useState<string[]>(
    []
  );

  useEffect(() => {
    const fetchByType = async () => {
      if (!pokemonType) return;
      const pokemonsOfType = await fetchPokemonsByType(pokemonType);
      setAllowedPokemonsByType(pokemonsOfType);
    };
    fetchByType();
  }, [pokemonType]);

  return allowedPokemonsByType;
};

import { useEffect, useState } from "react";
import { Pokemon } from "pokenode-ts";
import { fetchPokemonByName } from "./apiHandler";

export const usePokemonDetails = (pokemonName: string) => {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const data = await fetchPokemonByName(pokemonName);
        setPokemonDetails(data);
      } catch (err) {
        console.error("Failed to fetch Pokemon details:", err);
      }
      setIsLoading(false);
    };

    fetchDetails();
  }, [pokemonName]);

  return { pokemonDetails, isLoading };
};

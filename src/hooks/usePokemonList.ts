import { useState, useEffect, useCallback } from "react";
import { fetchPokemonList } from "./apiHandler";
import { NamedAPIResource } from "pokenode-ts";

export const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPokemons = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchPokemonList();
      setPokemonList(data.results);
    } catch (err) {
      setError("Failed to fetch Pokemon list.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return { pokemonList, isLoading, error };
};

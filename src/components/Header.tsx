import { useState, useEffect } from "react";
import useDebounce from "../hooks/utils";
import { usePokemonTypes } from "../hooks/usePokemonTypes";

type HeaderProps = {
  selectedPokemon: string;
  onChange: (name: string) => void;
  pokemonType: string;
  setPokemonType: (type: string) => void;
};
export default function Header({
  pokemonType = "None",
  selectedPokemon,
  onChange,
  setPokemonType,
}: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState(selectedPokemon);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { pokemonTypes, isLoading } = usePokemonTypes();

  useEffect(() => {
    onChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onChange]);

  return (
    <div className="flex flex-col gap-8 md:p-10 p-2">
      <h2>PokeDex</h2>
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <input
          type="text"
          className="md:w-2/4"
          placeholder="Search pokemon by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isLoading ? (
          <div>Loading Pokemon Types... </div>
        ) : (
          <select
            className="md:w-1/4"
            value={pokemonType}
            onChange={(e) => setPokemonType(e.target.value)}
          >
            {pokemonTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

import "./App.css";
import PokemonList from "./components/PokemonList";
import { useMemo, useState } from "react";
import PokemonDetails from "./components/PokemonDetails";
import Header from "./components/Header";
import { usePokemonsByType } from "./hooks/usePokemonsByType";
import { usePokemonList } from "./hooks/usePokemonList";

function App() {
  const { pokemonList, isLoading, error } = usePokemonList();
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>();
  const [pokemonType, setPokemonType] = useState<string | undefined>();
  const [currentPokemonName, setCurrentPokemonName] = useState<string>("");
  const allowedPokemonsByType = usePokemonsByType(pokemonType);

  const filteredPokemonList = useMemo(() => {
    return pokemonList.filter((pokemon) => {
      const nameMatch = pokemon.name
        .toLowerCase()
        .includes(currentPokemonName.toLowerCase());
      const typeFilter =
        !pokemonType || allowedPokemonsByType.includes(pokemon.name);
      return nameMatch && typeFilter;
    });
  }, [pokemonList, currentPokemonName, pokemonType, allowedPokemonsByType]);

  if (error) return <div>Failed to load pokemon list</div>;

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-gray-500 border-4 h-4/5 w-4/5 md:mx-4 md:my-6 my-2 flex flex-col">
        {selectedPokemon ? (
          <PokemonDetails
            pokemonName={selectedPokemon}
            goBack={() => setSelectedPokemon(undefined)}
          />
        ) : (
          <>
            <Header
              selectedPokemon={currentPokemonName}
              setPokemonType={setPokemonType}
              pokemonType={pokemonType || ""}
              onChange={(value) => setCurrentPokemonName(value)}
            />
            <div className="my-3 border-2 border-gray-600 w-4/5 self-center align-middle centered"></div>
            {isLoading ? (
              <div>Pokemon List is loading..</div>
            ) : (
              <PokemonList
                pokemonList={filteredPokemonList}
                selectPokemon={setSelectedPokemon}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

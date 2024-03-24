import {NamedAPIResource} from "pokenode-ts";

type PokemonListProps = {
  pokemonList: NamedAPIResource[];
  selectPokemon: (name: string) => void;
};

export default function PokemonList({pokemonList, selectPokemon}: PokemonListProps) {
  return (
    <div className="md:p-10 p-2 overflow-scroll">
      <div className="flex flex-col gap-3">
        {pokemonList.map((pokemon) => (
          <div
            className="px-3 py-2 hover:cursor-pointer border-gray-500 border-2 hover:border-gray-300 transition-all duration-500"
            onClick={() => selectPokemon(pokemon.name)} key={pokemon.name}>{pokemon.name}</div>
        ))}
      </div>
    </div>
  );
}

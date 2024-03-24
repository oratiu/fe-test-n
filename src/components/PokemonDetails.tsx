import { PokemonFormattedDetail } from "./PokemonFormattedDetail";
import { usePokemonDetails } from "../hooks/usePokemonDetails";

type PokemonDetailsProps = {
  pokemonName: string;
  goBack: () => void;
};

const PokemonDetails = ({ pokemonName, goBack }: PokemonDetailsProps) => {
  const { pokemonDetails, isLoading } = usePokemonDetails(pokemonName);

  if (isLoading) return <div className="pt-10 px-6">Loading...</div>;

  return (
    <div className="flex flex-col gap-4 pt-10">
      <div className="px-6">
        {pokemonDetails && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h1 className="text-3xl uppercase">{pokemonDetails.name}</h1>
              <h1
                className="text-center px-3 py-2 text-3xl border-2 border-gray-500 hover:border-gray-300 transition-all duration-500 hover:text-black hover:bg-gray-300 cursor-pointer"
                onClick={() => goBack()}
              >
                Go back
              </h1>
            </div>
            <div className="flex flex-row justify-between">
              <div className="">
                <PokemonFormattedDetail value={pokemonDetails.id} label="ID" />
                <PokemonFormattedDetail
                  value={pokemonDetails.height}
                  label="Height"
                />
                <PokemonFormattedDetail
                  value={pokemonDetails.weight}
                  label="Weight"
                />
                <PokemonFormattedDetail
                  value={pokemonDetails.base_experience}
                  label="Base experience"
                />
              </div>
              <div className="">
                <img
                  className="border-2 border-gray-500 rounded-full"
                  src={
                    pokemonDetails.sprites.front_default ||
                    "https://placehold.co/400"
                  }
                  alt="pokemon front pic"
                />
              </div>
            </div>
            <div>
              Types:{" "}
              {pokemonDetails.types.map((type) => type.type.name).join(", ")}
            </div>
            <div>
              Abilities:{" "}
              {pokemonDetails.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </div>
            <div>
              Forms: {pokemonDetails.forms.map((form) => form.name).join(", ")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;

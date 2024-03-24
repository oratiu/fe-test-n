// apiHandler.ts
import { PokemonClient } from "pokenode-ts";

const client = new PokemonClient();

export async function getPokemonTypeList() {
  try {
    const data = await client.listTypes();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch Pokemon type list:", error);
    throw error;
  }
}

export async function fetchPokemonList(offset = 0, limit = 500) {
  try {
    const data = await client.listPokemons(offset, limit);
    return data;
  } catch (error) {
    console.error("Failed to fetch Pokemon list:", error);
    throw error;
  }
}

export async function fetchPokemonByName(name: string) {
  try {
    const data = await client.getPokemonByName(name);
    return data;
  } catch (error) {
    console.error(`Failed to fetch Pokemon by name: ${name}`, error);
    throw error;
  }
}

export async function fetchPokemonsByType(type: string) {
  try {
    const data = await client.getTypeByName(type);
    return data.pokemon.map((p) => p.pokemon.name);
  } catch (error) {
    console.error(`Failed to fetch Pokemons by type: ${type}`, error);
    throw error;
  }
}

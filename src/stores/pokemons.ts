import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Pokemon } from '@/interfaces';

interface State {
  pokemonList: Map<number, Pokemon>;
};

export const usePokemonsStore = defineStore('pokemons', () => {
  // store
  const pokemons = ref(new Map<number, Pokemon>());
  // getters
  const getById = (id: number): Pokemon => {
    const pokemon = pokemons.value.get(id) as Pokemon;
    return pokemon;
  };
  // action
  function initList () {
    pokemons.value.set(1, {
      id: 1,
      name: 'フシギダネ',
      type1: 'くさ',
      type2: 'どく',
      species: 'たね',
    });
    pokemons.value.set(4, {
      id: 4,
      name: 'ヒトカゲ',
      type1: 'ほのお',
      species: 'とかげ',
    });
    pokemons.value.set(7, {
      id: 7,
      name: 'ゼニガメ',
      type1: 'みず',
      species: 'かめのこ',
    });
  };

  function addPokemon (pokemon: Pokemon) {
    pokemons.value.set(pokemon.id, pokemon);
  };

  return { pokemons, initList, getById, addPokemon };
});
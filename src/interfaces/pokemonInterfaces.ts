export interface pokemonI {
  id: number;
  name: string;
  attack: string;
  attackPower: number;
  cost: number;
  image: string;
}

export type pokemons = pokemonI[];

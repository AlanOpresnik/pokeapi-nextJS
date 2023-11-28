export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: smallPokemon[];
}

export interface smallPokemon {
  name: string;
  url: string;
  id: number;

  img: string;
  sprites: {
    front_default: string;
    // Add other sprite properties if needed
  };
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
}


const toggleFavorite = (id: number) => {
  let favorites: Number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokemon) => pokemon !== id);
  } else {
    favorites.push(id);
    console.log("agregado" + id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existPokemonInFavorite = (id: number): boolean => {
    if(typeof window === "undefined") return false;
  let favorites: Number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const pokemons = ():number[] => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
}

export { toggleFavorite, existPokemonInFavorite, pokemons };

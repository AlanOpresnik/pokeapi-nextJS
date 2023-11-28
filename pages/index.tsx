import { Inter } from "next/font/google";
import { Button, Card, CardFooter } from "@nextui-org/react";
import Layout from "@/components/Layouts/Layout";
import { GetStaticProps } from "next";
import pokeApi from "@/api/pokeapi";

import { PokemonListResponse, smallPokemon } from "@/interfaces/pokemon-list";
import { Grid, CardContent, CardMedia } from "@mui/material";
import PokemonCard from "@/components/pokemons/PokemonCard";

const inter = Inter({ subsets: ["latin"] });
interface HomeProps {
  pokemons: smallPokemon[];
}
const Home: React.FC<HomeProps> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title={"listado de pokemons"}>
      <PokemonCard pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const detailsPromises = data.results.map(async (p) => {
    const response = await pokeApi.get<smallPokemon>(p.url);

    const abilityName = response.data.abilities[0].ability.name;

    return {
      ...response.data,
      abilityName,
    };
  });
  const detailResponses = await Promise.all(detailsPromises);
  const pokemons: smallPokemon[] = detailResponses.map((response, i) => ({
    name: response.name,
    url: response.url || "",
    id: response.id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
    sprites: response.sprites,
    abilities: response.abilities,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
export default Home;

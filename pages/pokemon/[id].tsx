import pokeApi from "@/api/pokeapi";
import Layout from "@/components/Layouts/Layout";
import { Pokemon } from "@/interfaces/pokemon-full";
import { PokemonListResponse, smallPokemon } from "@/interfaces/pokemon-list";
import { CardMedia, Container, Grid } from "@mui/material";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

import { useRouter } from "next/router";

import React from "react";

interface props {
  pokemon: Pokemon;
}

const pokemonDetails: NextPage<props> = ({ pokemon }) => {
  return (
    <Layout title="Pokemon Details">
      <Grid
        columns={12}
        container
        sx={{
          marginTop: "10px",
          gap: "20px",
        }}
      >
        <Grid item xs={0} md={3.6}>
          <Card isHoverable style={{ padding: "30px" }}>
            <CardBody>
              <CardMedia>
                <img
                  src={
                    pokemon.sprites.other?.dream_world?.front_default ||
                    "noImg.jpg"
                  }
                  alt={pokemon.name}
                  width={"100%"}
                  height={"200px"}
                />
              </CardMedia>
            </CardBody>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card isHoverable>
            <CardHeader
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1 className="text-3xl font-bold">{pokemon.name}</h1>
              <Button color="default">Guardar en favoritos</Button>
            </CardHeader>
            <CardBody>
              <h3 className="text-xl">SPRITES</h3>
              <Container
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const pokemons151 = [...Array(151)].map((value, i) => `${i + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default pokemonDetails;

import pokeApi from "@/api/pokeapi";
import Layout from "@/components/Layouts/Layout";
import { Pokemon } from "@/interfaces/pokemon-full";
import { PokemonListResponse, smallPokemon } from "@/interfaces/pokemon-list";
import { existPokemonInFavorite, toggleFavorite } from "@/utils/localFavorites";
import { CardMedia, Container, Grid } from "@mui/material";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import confetti from "canvas-confetti";
import Image from "next/image";

import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import { getPokemonInfo } from "@/utils/getPokemonInfo";

interface props {
  pokemon: Pokemon;
}

const PokemonDetails: NextPage<props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(existPokemonInFavorite(pokemon.id));
  }, [pokemon.id]);

  const OnToggleFavorite = () => {
    toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti({
        zIndex: 9999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };
  return (
    <Layout title={pokemon.name}>
      <Grid
        columns={12}
        container
        sx={{
          marginTop: "10px",
          gap: "20px",
        }}
      >
        <Grid item xs={0} md={3.6}>
          <Card isHoverable style={{ padding: "30px", maxHeight: "300px" }}>
            <CardBody>
              <CardMedia>
                <img
                  src={
                    pokemon.sprites.other?.dream_world?.front_default ||
                    "noImg.jpg"
                  }
                  alt={pokemon.name}
                  style={{
                    width: "100%",
                    height: "200px",
                  }}
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
              <Button
                onClick={OnToggleFavorite}
                color={isInFavorites ? "primary" : "default"}
              >
                {isInFavorites
                  ? "Eliminar de favoritos"
                  : "Agregar a favoritos"}
              </Button>
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

  return {
    props: {
      pokemon: await getPokemonInfo(id),
    },
  };
};

export default PokemonDetails;

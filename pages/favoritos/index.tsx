import Layout from "@/components/Layouts/Layout";
import FavoriteCard from "@/components/ui/FavoriteCard";
import NoFavorites from "@/components/ui/noFavorites";
import { pokemons } from "@/utils/localFavorites";
import { CardMedia, Grid } from "@mui/material";
import { Card, Image } from "@nextui-org/react";
import Head from "next/head";

import React, { useEffect, useState } from "react";

const Favoritos = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons);
  }, []);

  return (
    <>
      <Layout  title={"favoritos"}>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoriteCard favoritePokemons={favoritePokemons} />
      )}
      </Layout>
    </>
  );
};

export default Favoritos;

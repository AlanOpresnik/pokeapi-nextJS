import { CardMedia, Grid } from "@mui/material";
import { Card, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
const FavoriteCard = ({ favoritePokemons }: { favoritePokemons: number[] }) => {
  const router = useRouter();

  const handleRouter = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid container gap={2} direction={"row"} justifyContent={"flex-start"}>
      {favoritePokemons.map((id: number) => (
        <Grid xs={6} sm={3} md={2} lg={1} key={id}>
          <Card
            isHoverable
            isPressable
            onClick={() => handleRouter(id)}
            className="p-10"
          >
            <CardMedia>
              <img
                className="w-full h-[60px]"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt={`Pokemon ${id}`}
              />
            </CardMedia>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoriteCard;

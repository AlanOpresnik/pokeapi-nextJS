import { Inter } from "next/font/google";
import { Button, Card, CardFooter } from "@nextui-org/react";
import { FC } from "react";
import { PokemonListResponse, smallPokemon } from "@/interfaces/pokemon-list";
import { Grid, CardContent, CardMedia } from "@mui/material";
import { useRouter } from "next/router";

interface props {
  pokemons: smallPokemon[];
}

const PokemonCard: FC<props> = ({ pokemons}) => {

  const router = useRouter()

  const handleClick = (id:number) => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <div>
      <Grid
        justifyContent={"center"}
        columns={{ xs: 2, sm: 3, md: 4, lg: 6 }}
        gap={3}
        container
      >
        {pokemons.map((p) => (
          <Grid
            xs={0}
            sm={0.9}
            md={0.9}
            lg={0.9}
            key={p.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              isHoverable
              isPressable
              onClick={()=>handleClick(p.id)}
            >
              <CardMedia
                sx={{ width: "100%", height: "160px", objectFit: "contain" }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    padding: "1rem",
                  }}
                />
              </CardMedia>
              <CardContent></CardContent>
              <CardFooter
                style={{
                  justifyContent: "center",
                  paddingTop: "1rem",
                  marginTop: "1rem",
                }}
              >
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                  <div className="flex justify-between mt-8 items-center gap-4">
                    <p
                      className="font-bold text-xl"
                      style={{ marginBottom: 4, fontWeight: "bold" }}
                    >
                      {p.name}
                    </p>
                    <p className="text-lg">#{p.id}</p>
                  </div>
                  <p>ability: {p.abilities[0].ability.name}</p>
                </div>
              </CardFooter>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PokemonCard;

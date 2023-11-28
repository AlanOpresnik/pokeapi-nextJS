import { useTheme } from "next-themes";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: "#111111",
        marginBottom:"20px"
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="pokemon"
        width={70}
        height={70}
      />
      <Link className="flex items-center" href={"/"}>
      <h2 className="font-bold text-[50px]">P</h2>
      <h3 className="text-[30px]">okemon</h3>
      </Link>
    

      <Spacer
        style={{
          flex: 1,
        }}
      />
      <p>Favoritos</p>
    </div>
  );
};

export default Navbar;

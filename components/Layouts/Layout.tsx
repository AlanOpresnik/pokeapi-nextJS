import Head from "next/head";
import { FC, ReactNode } from "react";
import Navbar from "../ui/Navbar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "pokemon app"}</title>
        <meta name="author" content="alan opresnik" />
        <meta name="description" content="Informacion sobre el pokemon xxxx" />
        <meta name="keywords" content="xxxx, pokemons, pokedex" />
      </Head>
      {/* navbar */}
      <Navbar />
      <main style={{
        padding:"0 20px"
      }}>{children}</main>
    </>
  );
};

export default Layout;

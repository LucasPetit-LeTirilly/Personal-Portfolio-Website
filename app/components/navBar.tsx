"use client";
import Image from "next/image";
import Link from "next/link";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Koho, sans-serif",
    body1: {
      fontWeight: 500,
      fontSize: 24,
      color: "white",
    },
  },
  palette: {
    background: {
      paper: "#76453F",
    },
  },
});

export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <header className="bg-brown-header flex flex-row justify-between items-center pl-5 pr-5 pt-2 pb-2">
        <Link href={process.env.NEXT_PUBLIC_WEBSITE_URL}>
          <Image
            src="logo-home.svg"
            alt="Retour à l'accueil"
            width={40}
            height={40}
          />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL}>
          <Image
            src="logo-github.svg"
            alt="Lien vers la page github de Lucas Petit - Le Tirilly"
            width={40}
            height={40}
          />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
          <Image
            src="logo-linkedin.svg"
            alt="Lien vers la page linked in de Lucas Petit - Le Tirilly"
            width={40}
            height={40}
          />
        </Link>
        <nav>
          <SwipeableTemporaryDrawer />
        </nav>
      </header>
    </ThemeProvider>
  );
}

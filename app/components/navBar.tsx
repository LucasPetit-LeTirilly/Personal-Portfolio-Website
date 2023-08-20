"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollLink from "./ScrollLink";
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
      <header className="bg-brown-header sticky top-0 flex flex-row justify-between items-center pl-5 pr-5 pt-2 pb-2 z-50">
        <div className="flex flex-row w-[67.4%] justify-between items-center sm:w-fit">
          <Link href={process.env.NEXT_PUBLIC_WEBSITE_URL}>
            <Image
              src="logo-home.svg"
              alt="Retour à l'accueil"
              width={40}
              height={40}
              className=""
            />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_GITHUB_URL} rel="noopener noreferrer" target="_blank" className="min-[720px]:ml-[5.31rem] min-[640px]:ml-[1.5rem]">
            <Image
              src="logo-github.svg"
              alt="Lien vers la page github de Lucas Petit - Le Tirilly"
              width={40}
              height={40}
            />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL} rel="noopener noreferrer" target="_blank" className="sm:ml-[1.5rem]">
            <Image
              src="logo-linkedin.svg"
              alt="Lien vers la page linked in de Lucas Petit - Le Tirilly"
              width={40}
              height={40}
            />
          </Link>
        </div>

        <nav>
          <SwipeableTemporaryDrawer />
          <div className="hidden sm:flex flex-row items-center gap-10 max-[780px]:gap-5">
            <ScrollLink href="#projets-recents">
              <p className="text-white font-koho font-medium text-lg">
                Projets-Récents
              </p>
            </ScrollLink>
            <ScrollLink href="#competences">
              <p className="text-white font-koho font-medium text-lg">
                Compétences
              </p>
            </ScrollLink>
            <ScrollLink href="#contact">
              <p className="text-white font-koho font-medium text-lg">
                Contact
              </p>
            </ScrollLink>
            <Link href={process.env.NEXT_PUBLIC_WEBSITE_ENGLISH_URL}>
              <p className="text-white font-koho font-medium text-lg">
                In English
              </p>
            </Link>
          </div>
        </nav>
      </header>
    </ThemeProvider>
  );
}

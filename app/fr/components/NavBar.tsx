"use client";
import Image from "next/image";
import LogoHome from "../../../public/logo-home.svg";
import LogoGithub from "../../../public/logo-github.svg";
import LogoLinkedIn from "../../../public/logo-linkedin.svg";
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
      <header className="bg-brown-header sticky top-0 flex flex-row justify-between items-center pl-5 pr-5 pt-2 pb-2 z-50">
        <nav className="flex flex-row w-[67.4%] justify-between items-center sm:w-fit scroll-smooth">
          <Link href="#accueil">
            <Image
              src={LogoHome}
              alt="Retour à l'accueil"
              className="w-[40px] h-[40px]"
            />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            rel="noopener noreferrer"
            target="_blank"
            className="min-[720px]:ml-[5.31rem] min-[640px]:ml-[1.5rem]"
          >
            <Image
              src={LogoGithub}
              alt="Lien vers la page github de Lucas Petit - Le Tirilly"
              className="w-[40px] h-[40px]"
            />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            rel="noopener noreferrer"
            target="_blank"
            className="sm:ml-[1.5rem]"
          >
            <Image
              src={LogoLinkedIn}
              alt="Lien vers la page linked in de Lucas Petit - Le Tirilly"
              className="w-[40px] h-[40px]"
            />
          </Link>
        </nav>

        <nav>
          <SwipeableTemporaryDrawer />
          <div className="hidden sm:flex flex-row items-center gap-10 max-[780px]:gap-5">
            <Link href="#projets-recents">
              <p className="text-white font-koho font-medium text-lg">
                Projets Récents
              </p>
            </Link>
            <Link href="#competences">
              <p className="text-white font-koho font-medium text-lg">
                Compétences
              </p>
            </Link>
            <Link href="#contact">
              <p className="text-white font-koho font-medium text-lg">
                Contact
              </p>
            </Link>
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

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
          <Link href="#home">
            <Image
              src={LogoHome}
              alt="Back to Home"
              className="w-[40px] h-[40px] hover:brightness-75"
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
              alt="To my GitHub page"
              className="w-[40px] h-[40px] hover:brightness-75"
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
              alt="To my LinkedIn page"
              className="w-[40px] h-[40px] hover:brightness-75"
            />
          </Link>
        </nav>

        <nav>
          <SwipeableTemporaryDrawer />
          <div className="hidden sm:flex flex-row items-center gap-10 max-[780px]:gap-5">
            <Link href="#recent-projects">
              <p className="text-white font-koho font-medium text-lg hover:brightness-75">
                Recent Projects
              </p>
            </Link>
            <Link href="#skills">
              <p className="text-white font-koho font-medium text-lg hover:brightness-75">Skills</p>
            </Link>
            <Link href="#contact">
              <p className="text-white font-koho font-medium text-lg hover:brightness-75">
                Contact
              </p>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_WEBSITE_FRENCH_URL}>
              <p className="text-white font-koho font-medium text-lg hover:brightness-75">
                In French
              </p>
            </Link>
          </div>
        </nav>
      </header>
    </ThemeProvider>
  );
}

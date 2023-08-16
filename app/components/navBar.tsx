"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  function sayHello() {
    alert("You clicked me!");
  }
  return (
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
        <button onClick={sayHello}>
          <Image
            src="bars-solid.svg"
            alt="Ouvrir le menu de navigation"
            width={40}
            height={45.71}
            className="sm:hidden"
          />
        </button>
      </nav>
    </header>
  );
}

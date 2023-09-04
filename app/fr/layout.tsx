import "./../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucas Petit Le Tirilly - Développeur Fullstack",
  description:
    "Développeur fullstack spécialisé en javascript, je m'intéresse aux technologies du web, des base de données et de l'UI/UX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta
          property="og:title"
          content="Lucas Petit Le Tirilly - Développeur Fullstack"
        />
        <meta
          property="og:description"
          content="Développeur fullstack spécialisé en javascript, je m'intéresse aux technologies du web, des base de données et de l'UI/UX."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_WEBSITE_URL} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Lucas Petit Le Tirilly - Développeur Fullstack"
        />
        <meta
          name="twitter:description"
          content="Développeur fullstack spécialisé en javascript, je m'intéresse aux technologies du web, des base de données et de l'UI/UX."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

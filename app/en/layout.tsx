import "./../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucas Petit Le Tirilly - Fullstack Developer",
  description:
    "Fullstack developer specialised in javascrapt, I'm interested in web and database technologies as well as UI/UX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Lucas Petit Le Tirilly - Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Fullstack developer specialised in javascrapt, I'm interested in web and database technologies as well as UI/UX."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_WEBSITE_URL} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Lucas Petit Le Tirilly - Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="Fullstack developer specialised in javascrapt, I'm interested in web and database technologies as well as UI/UX."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

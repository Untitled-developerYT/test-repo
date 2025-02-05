import "@@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Discord Bot Boilerplate | Build Discord Bots with Nextjs",
  description: "Nextjs Discord bot | Create discord bots using nextjs",
  keywords: [
    "nextjs",
    "discord",
    "bot",
    "boilerplate",
    "react",
    "typescript",
    "discord bot development",
    "nextjs discord bot",
    "discord bot framework",
  ],
  authors: [
    {
      name: "Mark Matthew Vergara",
      url: "https://github.com/mmvergara",
    },
  ],
  creator: "Mark Matthew Vergara",
  publisher: "https://github.com/mmvergara",
  openGraph: {
    title: "Nextjs Discord Bot Boilerplate | Build Discord Bots with Nextjs",
    description: "Nextjs Discord bot | Create discord bots using nextjs",
    url: "https://github.com/mmvergara/nextjs-discord-bot-boilerplate",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next Js Discord Bot Boilerplate | Mark Matthew Vergara</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="9L9yVl1B38S_ABkJE_s2iQbhCLNYOgPMi_C8kKrWFAg"
        />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}

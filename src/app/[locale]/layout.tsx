

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { inter } from "@/lib/fonts";


export const metadata = {
  title: "Discover polkadot",
   description : "Discover a wide variety of apps, blockchains, wallets and explorers, built on th Polkadot ecosystem by developers and contributors from across the globe. ",
   canonical : "https://www.canonical.ie/",
   openGraph: {
    title: 'Discover Polkadot | Parachains',
    description: 'Discover a wide variety of apps, blockchains, wallets and explorers, built on th Polkadot ecosystem by developers and contributors from across the globe.',
    images : [
      {
        url: 'https://zfijyshxzcpbcrofuptf.supabase.co/storage/v1/object/public/quests_platform/Discover%20Polkadot.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
      {
        url: 'https://zfijyshxzcpbcrofuptf.supabase.co/storage/v1/object/public/quests_platform/Discover%20Polkadot.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
      {
        url: 'https://zfijyshxzcpbcrofuptf.supabase.co/storage/v1/object/public/quests_platform/Discover%20Polkadot.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950`}>{children}</body>
    </html>
  );
}

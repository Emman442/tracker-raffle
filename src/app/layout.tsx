import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './solana.css';
import { cn } from '@/lib/utils';
import AppWalletProvider  from '@/components/solana/WalletProvider';
// import PluginComponent from "@/components/ui/plugin";
import {Toaster} from "sonner"
import Header from '@/components/layout/Header';
import { DotPattern } from '@/components/ui/DotPattern';

export const metadata: Metadata = {
  title: "Lucky Seeker",
  description: "A $TRACKER powered Raffle dApp on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("font-body antialiased min-h-screen bg-background")}>
        <AppWalletProvider>
          <div className="relative flex min-h-screen flex-col">
            <DotPattern />
            <Header />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster position='bottom-right' />
          {/* <PluginComponent /> */}
        </AppWalletProvider>
      </body>
    </html>
  );
}

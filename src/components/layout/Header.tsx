"use client";

import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Ticket, User, Award, HomeIcon } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/buy", label: "Buy Tickets", icon: Ticket },
  { href: "/admin", label: "Admin Panel", icon: User },
  { href: "/claim", label: "Claim Prize", icon: Award },
];

export default function Header() {
  return (
    <div className="sticky top-0 flex h-16 md:h-20 items-center gap-4 px-3 md:px-6 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src={"/favico.png"}
              alt="Tracker Image"
              width={35}
              height={35}
            />
            <span className="hidden font-bold sm:inline-block">
              TRACKER LOTTERY
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <WalletMultiButton
            style={{
              background: "transparent",
              height: "36px",
              fontSize: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#00E6B8",
              border: "1px solid #00E6B8",
            }}
          />
        </div>
      </div>
    </div>
  );
}

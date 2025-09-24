"use client";

import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { motion } from "framer-motion";
import { Ticket, User, Award, HomeIcon } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/buy", label: "Buy Tickets", icon: Ticket },
  { href: "/admin", label: "Admin Panel", icon: User },
  { href: "/claim", label: "Claim Prize", icon: Award },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Ticket className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              SolLottery
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <WalletMultiButton />
        </div>
      </div>
    </motion.header>
  );
}

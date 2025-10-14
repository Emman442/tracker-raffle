"use client";

import Link from "next/link";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Menu, X, HomeIcon, Ticket, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/buy", label: "Buy Tickets", icon: Ticket },
  { href: "/claim", label: "Claim Prize", icon: Award },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu when wallet modal opens
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const walletModal = document.querySelector('[role="dialog"]');
      if (walletModal) {
        setMobileOpen(false);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        /* Override Solana Wallet Adapter Modal Styles */
        .wallet-adapter-modal-wrapper {
          z-index: 9999 !important;
          background: rgba(0, 0, 0, 0.85) !important;
          backdrop-filter: blur(8px) !important;
        }

        .wallet-adapter-modal-overlay {
          background: rgba(0, 0, 0, 0.85) !important;
          backdrop-filter: blur(8px) !important;
        }

        .wallet-adapter-modal-container {
          z-index: 10000 !important;
        }

        .wallet-adapter-modal {
          background: #1a1a1a !important;
          backdrop-filter: blur(10px) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        .wallet-adapter-modal-list {
          background: transparent !important;
        }

        .wallet-adapter-modal-list-item {
          background: rgba(40, 40, 40, 0.9) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          transition: all 0.2s ease !important;
        }

        .wallet-adapter-modal-list-item:hover {
          background: rgba(60, 60, 60, 0.9) !important;
          border-color: #00e6b8 !important;
        }

        .wallet-adapter-modal-title {
          color: white !important;
        }

        .wallet-adapter-button {
          background: transparent !important;
        }

        /* Force neutral dark colors for wallet modal */
        .wallet-adapter-modal-wrapper::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: -1;
        }
      `}</style>

      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10">
        <div className="container flex items-center justify-between h-16 px-4 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/favico.png" alt="Tracker" width={35} height={35} />
            <span className="font-bold hidden sm:inline-block">
              LUCKY SEEKER.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
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

          {/* Wallet + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <div onClick={() => setMobileOpen(false)}>
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
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Overlay Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="fixed top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-t border-white/10 z-45"
              >
                <nav className="flex flex-col p-5 space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 text-white hover:text-primary transition text-lg"
                    >
                      <link.icon size={20} />
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

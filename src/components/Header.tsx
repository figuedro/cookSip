"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const path = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary">
      <nav className="flex justify-between items-center px-8 py-2 max-w-7xl mx-auto">
        <Link
          href={"/"}
          className={`${path === "/" ? " font-bold" : "font-normal"} `}
        >
          <Image
            src="/iconCookSip.png"
            alt="CookSip Logo"
            width={120}
            height={120}
          />
        </Link>

        <div className="gap-5 items-center text-secondary font-primary text-xs lg:text-lg hidden lg:flex">
          <Link
            href={"/recipes"}
            className={`${path === "/recipes" ? " font-bold" : "font-normal"} `}
          >
            Receitas
          </Link>
          <Link
            href={"/about"}
            className={`${path === "/about" ? "font-bold" : "font-normal"} `}
          >
            Sobre
          </Link>
          <a
            href="https://www.linkedin.com/in/joao-pedro-figuedro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-secondary"></span>
          <span className="block w-6 h-0.5 bg-secondary"></span>
          <span className="block w-6 h-0.5 bg-secondary"></span>
        </button>

        <div
          className={`
          fixed inset-0
          bg-primary text-secondary
          flex flex-col items-center p-25 gap-6
          transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
            className="absolute top-6 right-6 z-50 text-3xl font-light"
          >
            ✕
          </button>

          <Link
            href="/recipes"
            className={`text-xl ${
              path === "/recipes" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Receitas
          </Link>

          <Link
            href="/about"
            className={`text-xl ${
              path === "/about" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </Link>

          <a
            href="https://www.linkedin.com/in/joao-pedro-figuedro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Linkedin
          </a>
        </div>
      </nav>
    </header>
  );
}

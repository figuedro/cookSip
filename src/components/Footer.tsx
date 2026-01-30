"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();
  return (
    <footer className="flex justify-center w-full py-4 bg-white shadow-sm"></footer>
  );
}

import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            Dev
            <span className="text-purple-500">Blook</span>
          </div>
        </Link>

        <Link href="/tailwind">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            Let's
            <span className="text-purple-500">Tailwind</span>
          </div>
        </Link>
        <Link href="/form">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            Let's
            <span className="text-purple-500">Form</span>
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;

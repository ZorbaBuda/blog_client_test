import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";


const Navbar = () => {
  return (
  <div className="fixed top-0 flex w-full justify-between p-4">
    <div>
      <Link href="/">
    <div className="text-6xl font-bold tracking-tighter">Advaita Punk</div></Link>
    <div className="flex items-center justify-between">
      <div className="tracking-wider">Lo real es ahora</div>
      <button className="bg-black dark:bg-white text-black dark:text-black px-2  rounded-br-xl">menu</button>
    </div>
    </div>
    <div className="bg-white dark:bg-black flex gap-4">
    <div className="lg:flex gap-4 hidden">
      <Link href="/posts">posts</Link>
      <Link href="/">experiences</Link>
      <Link href="/">about</Link>
    </div>
    <ThemeSwitch />
    </div>

  </div>


  );
};

export default Navbar;

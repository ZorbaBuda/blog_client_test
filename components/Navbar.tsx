import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";


const Navbar = () => {
  return (
  <div className="  w-full   p-4">
    <div className="flex mx-auto justify-between items-center">
    <div className="">
      <Link href="/">
    <div className="text-6xl font-bold tracking-tighter">Advaita Punk</div></Link>
    <div className="flex items-center justify-between">
      <div className="tracking-wider">Lo real es ahora</div>
    </div>
    </div>
    
    <div className="lg:flex flex flex-wrap gap-4 ">
      <Link href="/posts">posts</Link>
      <Link href="/parser">experiences</Link>
      <Link href="/">about</Link>
    </div>
    <ThemeSwitch />
   
</div>
  </div>


  );
};

export default Navbar;

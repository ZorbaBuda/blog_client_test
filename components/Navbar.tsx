import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";


const Navbar = () => {
  return (
  <div className="flex w-full justify-between p-4">
    <div>left</div>
    <div className="flex gap-4">
      <Link href="/">journal</Link>
      <Link href="/">experiences</Link>
      <Link href="/">about</Link>
    </div>

  </div>


  );
};

export default Navbar;

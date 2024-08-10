"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (

    <button
    className=" rounded-full border-2 border-black dark:border-white h-fit"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  >
   <div className="">{theme === "dark" ? <SunIcon /> : <MoonIcon />}</div> 
  </button>
    // <button
    //   className="border border-purple-500 rounded-full  hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-amber-50"
    //   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    // >
    //   {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    // </button>
  );
};

export default ThemeSwitch;

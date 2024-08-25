import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import { useTranslations } from "next-intl";


const Navbar = () => {
  const t = useTranslations("Navbar")
  return (
  <div className="  w-full   p-4">
    <div className="flex mx-auto justify-between items-center">
    <div className="">
      <Link href="/">
    <div className="text-6xl font-bold tracking-tighter">Advaita Punk</div></Link>
    <div className="flex items-center justify-between">
      <div className="tracking-wider">{t('subtitle')}</div>
    </div>
    </div>
    
    <div className="lg:flex flex flex-wrap gap-4 ">
      <NavigationLink href="/posts">{t('links.posts')}</NavigationLink>
      <NavigationLink href="/experiences">{t('links.experiences')}</NavigationLink>
      <NavigationLink href="/about">{t('links.about')}</NavigationLink>
    </div>
    <ThemeSwitch />
    <LocaleSwitcher />
   
</div>
  </div>


  );
};

export default Navbar;

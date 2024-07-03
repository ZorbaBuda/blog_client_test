import AspectRatio from "@/components/tailwind/layout/AspectRatio";
import Columns from "@/components/tailwind/layout/Columns";
import Container from "@/components/tailwind/layout/Container";
import Link from "next/link";
import React from "react";

export default function page() {
  return (<>
  
  <h1>Layout</h1>
  <ul
        className='flex gap-x-[4
        8px] md:gap-x-[28px] md:p-5 text-lg  '
      >
        {linksLayout.map((item) => {
          return (
            <li key={item.hash}>
              <Link
                className=  {`text-black hover:border-b hover:border-dark transition duration-300 uppercase 
                font-open_sans font-medium`}
                href={item.hash}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <AspectRatio/> */}
      {/* <Container/> */}
      <Columns />

  </>
  )
}

const linksLayout = [
  { name: "Aspect Ratio", hash: "/" },
  { name: "Inici", hash: "/" },
  { name: "Sobre mi", hash: "/sobre" },
];

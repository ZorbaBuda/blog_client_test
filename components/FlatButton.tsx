import Link from "next/link"


export default function FlatButton({
    categoryName, slug, selected
} : {
     categoryName : string, 
     slug?: string, 
     selected: boolean
    }) {

    const href = slug === undefined ? "/posts" : `/posts?category=${slug}`

  return (
    <Link href={href}> <div className={`tracking-wider border-black dark:border-white 
      border px-2 py-[0.5px] text-sm rounded-br-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
      
      ${selected ? "dark:bg-white dark:text-black bg-black text-white"  : "dark:bg-black dark:text-white bg-white text-black" }
      `}>
        {categoryName}
        </div>
      </Link>
    // <Link href={`/posts?${slug}`} className={`tracking-wider border-black dark:border-white text-black dark:text-white
    // border px-2 py-[0.5px] text-sm rounded-br-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
    // flex items-center
    // ${selected ? ""  : "" }
    // `}>
    //   <span className="">  {categoryName}</span>
    // </Link>
  )
}

import Link from "next/link"


export default function FlatButton({
    categoryName, slug, selected
} : {
     categoryName : string, 
     slug?: string, 
     selected: boolean
    }) {

console.log(selected)
  return (
    <Link href={`/posts?${slug}`} className={`tracking-wider border-black dark:border-white text-black dark:text-white
    border px-2 py-[0.5px] text-sm rounded-br-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
    ${selected ? ""  : "" }
    `}>
        {categoryName}
    </Link>
  )
}

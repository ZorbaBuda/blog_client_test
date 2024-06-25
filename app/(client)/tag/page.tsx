import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import { Tag } from "@/app/utils/interface";
// import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import getCategories from "@/lib/getCategories";

async function getAllTags() {
 const tags = await getCategories()
  return tags;
}

// export const revalidate = 60;

export const metadata: Metadata = {
  title: "Tags",
  // title: {
  //   absolute: "TAGS",
  // },
  description: "Search for posts by tags on the blog"
}

const page = async () => {
  const tags: Category[] = await getAllTags();
  // console.log(tags, "tags");
  return (
    <div>
      <Header title="Tags" />
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
               {/*for now, pass 1 as value, later add field "blog Count in bbdd" */}
                #{tag.categoryName} ({1})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;

// import Header from "@/app/components/Header";
// import Navbar from "@/app/components/Navbar";
// import { Tag } from "@/app/utils/interface";
// // import { client } from "@/sanity/lib/client";
// import { Metadata } from "next";
// import Link from "next/link";
// import React from "react";
// import getCategories from "@/lib/getCategories";

// async function getAllTags() {
//  const tags = await getCategories()
//   return tags;
// }

// // export const revalidate = 60;

// export const metadata: Metadata = {
//   title: "Tags",
//   // title: {
//   //   absolute: "TAGS",
//   // },
//   description: "Search for posts by tags on the blog"
// }

// const page = async () => {
//   const tags: Category[] = await getAllTags();
//   console.log(tags, "tags");
//   return (
//     <div>
//       <Header title="Tags" />
//       <div>
//         {tags?.length > 0 &&
//           tags?.map((tag) => (
//             <Link key={tag?._id} href={`/tag/${tag.slug}`}>
//               <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
//                 #{tag.name} ({tag?.postCount})
//               </div>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default page;

import Header from "@/components/Header";
import PostComponent from "@/components/PostComponent";
// import { Post } from "@/app/utils/interface";
// import { client } from "@/sanity/lib/client";
import React from "react";
import getBlogsByCategory from "@/lib/getBlogsByCategory";
import { slugify } from "@/app/utils/helpers";

// export const revalidate = 60;

export async function generateMetadata({ params }: Params) {
  return {
    title: `#${params.slug}`,
    description: `Posts with the tag ${params.slug}`,
    openGraph: {
      title: `#${params.slug}`,
      description: `Posts with the tag ${params.slug}`,
      type: "website",
      locale: "en_US",
      url: `https://next-cms-blog-ce.vercel.app/${params.slug}`,
      siteName: "DevBlook",
    },
  };
}

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  // const slugged = slugify(params.slug)
  const posts: Blog[] = await getBlogsByCategory(params.slug);
 
  return (
    <div>
      <Header title={`#${params?.slug}`} tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
};

export default page;

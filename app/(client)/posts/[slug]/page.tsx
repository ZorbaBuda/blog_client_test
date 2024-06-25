import Header from "@/app/components/Header";
import Toc from "@/app/components/Toc";
import { slugify } from "@/app/utils/helpers";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import getBlog from "@/lib/getBlog";
import parser from "html-react-parser"

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

interface Params {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

async function getPost(slug: string) {
 
  const post = await getBlog(slug)
  return post;
}

// export const revalidate = 60;

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const post: Blog = await getPost(params?.slug);
  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      locale: "en_US",
      url: `https://next-cms-blog-ce.vercel.app/${params.slug}`,
      siteName: "DevBlook",
      images: [
        // {
        //   url: post.image,
        // }
        // {
        //   url: urlForImage(post?.body?.find((b: any) => b._type === "image")).width(1200).height(630).url(),
        //   width: 1200,
        //   height: 630,
        // },
      ],
    },
  };
}

const page = async ({ params, searchParams }: Params) => {
 
  const post: Blog = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <span className={`${dateFont?.className} text-purple-500`}>
          {new Date(post?.createdAt).toDateString()}
        </span>
        <div className="mt-5">
        
            <Link  href={`/tag/${post?.category}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{post?.category}
              </span>
            </Link>
         
        </div>
        {/* <div className="mt-5">
          {post?.categories?.map((tag) => (
            <Link key={tag} href={`/tag/${tag}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag}
              </span>
            </Link>
          ))}
        </div> */}
        {/* <Toc headings={post?.headings} /> */}
        <div className={richTextStyles}>
         {parser(post.body)}
        </div>
      </div>
    </div>
  );
};

export default page;

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;

import Toc from "@/components/Toc";

import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import getBlog from "@/lib/getBlog";
import parser from "html-react-parser";
import { dateLocaleFormatted } from "@/lib/utils";
// https://www.youtube.com/watch?v=wTGVHLyV09M&t=176s

interface Params {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

// export async function generateStaticParams() {
//   // SSG return posts.map({id}) => id
// }

async function getPost(slug: string) {
  const post = await getBlog(slug);
  return post;
}

// export const revalidate = 60;

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const post: TBlog = await getPost(params?.slug);
  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.metaDescription,
    // openGraph: {
    //   title: post.title,
    //   description: post.metaDescription,
    //   type: "article",
    //   locale: "en_US",
    //   url: `https://next-cms-blog-ce.vercel.app/${params.slug}`,
    //   siteName: "DevBlook",
    //   images: [
    //     // {
    //     //   url: post.image,
    //     // }
    //     // {
    //     //   url: urlForImage(post?.body?.find((b: any) => b._type === "image")).width(1200).height(630).url(),
    //     //   width: 1200,
    //     //   height: 630,
    //     // },
    //   ],
    // },
  };
}

const page = async ({ params, searchParams }: Params) => {
  const post: TBlog = await getPost(params?.slug);
  const dateFormatted = dateLocaleFormatted(post.createdAt)

  // console.log(post)

  if (!post) {
    notFound();
  }

  return (
    <div className="subcontainer-md">
      <div className="flex flex-col mx-auto">
        <div className="text-5xl font-semibold mb-5">{post.title}</div>
        <span className="">{dateFormatted}</span>
        <div className="mt-5"></div>

        <div className="prose-custom">{parser(post.body)}</div>
      </div>
    </div>
  );
};

export default page;

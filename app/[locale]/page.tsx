
// import { Post } from "../utils/interface";
import PostComponent from "@/components/PostComponent";
import getBlogs from "@/lib/getBlogs";
import HeroSection from "./HeroSection";
import PostCard from "@/components/PostCard";
import Home1Section from "@/components/Home1Section";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import parser from 'html-react-parser'
import { Metadata } from "next";

interface Params {
  params: {
    locale: string;
  };
 
}

 
export async function generateMetadata({params} : Params) {
  const locale = params.locale
  const t = await getTranslations({locale, namespace: 'metadata'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}
 

export default async function Home() {
  const posts: TBlog[] = await getBlogs();
  // console.log(posts, "posts");
  //not async, useTranslations
  // const t = await getTranslations( "product-section")
  const t = await getTranslations()

  return (
    <section className="mt-24 w-full subcontainerXl flex flex-col ">
     
     <div className="mb-10 flex flex-col prose-custom">
      {t("product-section.subheading")}
      {parser(t.raw("text"))}
     </div>
      <Home1Section />
     {/* <HeroSection /> */}
     <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
     {posts?.map((post) => <PostCard key={post?._id} post={post} />)}
     </div>
     </div>
          
    </section>
  );
}

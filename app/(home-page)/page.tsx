
// import { Post } from "../utils/interface";
import PostComponent from "@/components/PostComponent";
import getBlogs from "@/lib/getBlogs";
import HeroSection from "./HeroSection";



// export const revalidate = 60;

export default async function Home() {
  const posts: Blog[] = await getBlogs();
  // console.log(posts, "posts");

  return (
    <>
     <HeroSection />
  
          
    </>
  );
}

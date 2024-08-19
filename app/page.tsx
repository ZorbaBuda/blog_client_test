
// import { Post } from "../utils/interface";
import PostComponent from "@/components/PostComponent";
import getBlogs from "@/lib/getBlogs";
import HeroSection from "./HeroSection";
import PostCard from "@/components/PostCard";



// export const revalidate = 60;

export default async function Home() {
  const posts: TBlog[] = await getBlogs();
  // console.log(posts, "posts");

  return (
    <section className="mt-24 w-full subcontainerXl ">
     {/* <HeroSection /> */}
     <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
     {posts?.map((post) => <PostCard key={post?._id} post={post} />)}
     </div>
     </div>
          
    </section>
  );
}

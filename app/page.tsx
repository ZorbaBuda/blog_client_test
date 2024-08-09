
// import { Post } from "../utils/interface";
import PostComponent from "@/components/PostComponent";
import getBlogs from "@/lib/getBlogs";



// export const revalidate = 60;

export default async function Home() {
  const posts: Blog[] = await getBlogs();
  // console.log(posts, "posts");

  return (
    <div>
     
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}

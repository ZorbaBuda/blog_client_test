import Header from "../components/Header";
// import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import getBlogs from "@/lib/getBlogs";



// export const revalidate = 60;

export default async function Home() {
  const posts: Blog[] = await getBlogs();
  // console.log(posts, "posts");

  return (
    <div>
      <Header title="Articles" tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}

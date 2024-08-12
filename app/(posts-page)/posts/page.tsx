// import { Post } from "../utils/interface";
import FlatButton from "@/components/FlatButton";
import PostCard from "@/components/PostCard";
import PostComponent from "@/components/PostComponent";
import getBlogs from "@/lib/getBlogs";
import getCategories from "@/lib/getCategories";

// export const revalidate = 60;
type SearchParams = {
  category: string;
};

export default async function PostsPage({
  searchParams: { category },
}: {
  searchParams: SearchParams;
}) {
  const posts: Blog[] = await getBlogs();
  const categories: Category[] = await getCategories();

  console.log(category);

  return (
    <div className="mt-[144px] lg:mt-[300px] px-5">
      <div className="flex flex-col lg:flex-row justify-between gap-y-10">
        <h3 className="text-3xl font-bold">POSTS</h3>
        <ul className="flex flex-wrap gap-2">
          <FlatButton categoryName="all categories" selected={category === undefined} />
          {categories.length &&
            categories.map((cat) => (
              <FlatButton
                key={cat._id}
                categoryName={cat.categoryName}
                slug={cat.slug}
                selected={cat.slug === category}
              />
            ))}
        </ul>
      </div>
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostCard key={post?._id} post={post} />)}
      </div>
    </div>
  );
}

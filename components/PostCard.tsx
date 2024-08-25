import { dateLocaleFormatted } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
import { TBlog } from "@/types/index"

const PostCard = ({ post }: { post: TBlog }) => {
  const { title, slug, metaDescription, createdAt } = post;

  const dateFormatted = dateLocaleFormatted(createdAt)

  return (
    <NavigationLink href={`/posts/${slug}`}>
      <div className="text-4xl text-[#326891] dark:text-white font-bold mb-3 ">{title}</div>
      <div className="text-gray-600 dark:text-gray-300 mb-5">{dateFormatted}</div>
      <div className="prose-custom">{metaDescription}</div>
    </NavigationLink>
  );
};

export default PostCard;

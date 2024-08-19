

type TBlog = {
  _id: string;
  title: string;
  slug: string;
  body: string;
  author?: string;
  metaDescription: string;
  categories?: string[];
  published: boolean;
  bodyImages?: string[];
  featuredImage?: FeaturedImage;
  userId?: string;
  createdAt: string;
  updatedAt: string;
};

type TCategory = {
  _id: string,
  categoryName: string,
  slug: string,
  description: string,
  blogCount?: string,
  userId?: string,
  createdAt: string,
  updatedAt: string,
}

type TMedia = {
  id: string,
  imageId : string,
  imageUrl : string,
  imageTitle : string,
  altText : string,
  userId: string,
  createdAt: string,
  updatedAt: string,
}

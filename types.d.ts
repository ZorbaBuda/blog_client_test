type SearchParams = {
  page: string;
  limit: string;
  sort: string;
  search: string;
};

type FeaturedImage = {
  imageId :   string,
  imageUrl :  string,
  imageTitle:  string,
  altText :   string
}


type Blog = {
  _id: string,
  title: string,
  slug: string,
     body: string,
  author:string,
  metaDescription:string,
  category: string,
  categorySlug: string,
    published: boolean,
    bodyImages?: string[],
    featuredImage: FeaturedImage,
  userId: string,
  createdAt: string,
  updatedAt: string
}

type Category = {
  _id : string,
  categoryName : string,
  slug: string
}

import Image from "next/image"


const PostCard = ({post} :{post : Blog}) => {

const {title, slug, metaDescription,  createdAt } = post
const {imageUrl,altText } = post.featuredImage
  return (
    <div>
        <Image 
          src={imageUrl}
          width={300}
          height={200}
          alt={altText}
          className="w-full h-[275px] object-cover object-top"
          />
          <div>
            <div>{title}</div>
            <div>{createdAt}</div>
            <div>{metaDescription}</div>

          </div>
    </div>
  )
}

export default PostCard
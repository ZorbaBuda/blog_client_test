import Link from 'next/link'
import React from 'react'

interface Props {
  post: Blog;
}


const PostComponent = ({post}: Props) => {
  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post?.slug}`}>
        <h2 className={` text-2xl dark:text-slate-300`}>{post?.title}</h2>
        <p className={` my-2 text-purple-800`}>{new Date(post?.createdAt).toDateString()}</p>
        <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.metaDescription}</p>
      </Link>

     
      <div>
       
          <span  className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'>
            #{post?.category}
            </span>
       
      </div>

      {/* TAGS not now*/}
      {/* <div>
        {post?.categories?.map((tag) => (
          <span key={tag} className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'>#{tag}</span>
        ))}
      </div> */}
    </div>
  )
}

export default PostComponent

const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-purple-950
hover:shadow-md
hover:bg-purple-500
hover:text-white
hover:dark:bg-gray-950
`
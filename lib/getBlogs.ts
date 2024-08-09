"use server"
import { cache } from "react"

async function getBlogs() {
    const res = await fetch(`${process.env.SERVER_API!}/api/blogs`,
      // {
      //   next: {
      //     revalidate: 30
      //   }
      // }
    )
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return []
      // throw new Error('Failed to fetch data')
      
    }
   const data = await res?.json()
    return data
  }
 
   
  export default getBlogs
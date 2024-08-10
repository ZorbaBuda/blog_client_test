"use server"
import { cache } from "react"

async function getBlogs() {

  try {
    console.log("in get blogs")
      const res = await fetch(`${process.env.SERVER_API!}/api/blogs`,
        {
          cache: "no-store"
        }
      // {
      //   next: {
      //     revalidate: 30
      //   }
      // }
    )
    // console.log(res)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return []
      // throw new Error('Failed to fetch data')
      
    }
   const data = await res.json()
  //  console.log(data)
    return data

  } catch (error) {
     console.log(error)
     return []
  }
  
  }
 
   
  export default getBlogs
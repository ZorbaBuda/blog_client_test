"use server"
import { cache } from "react"
import { createDict } from "./utils"

async function getBlogs() {

  try {
   
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
  //  console.log(JSON.stringify(data))
  //  const dataStringified = JSON.stringify(data)
  //  createDict(dataStringified)
  //  console.log(data)
    return data

  } catch (error) {
     console.log(error)
     return []
  }
  
  }
 
   
  export default getBlogs
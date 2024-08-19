"use server"
import { cache } from "react"

async function getBlog(slug : String) {
    const res = await fetch(`${process.env.SERVER_API}/api/blogs/${slug}`)
   
    console.log(await res.json())
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   const result = await res?.json()
    return result.data
  }
 
   
  export default getBlog
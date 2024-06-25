import "server-only"
import { cache } from "react"

async function getBlog(slug : String) {
    const res = await fetch(`http://localhost:3001/api/blogs/${slug}`)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   const result = await res?.json()
    return result.data
  }
 
   
  export default getBlog
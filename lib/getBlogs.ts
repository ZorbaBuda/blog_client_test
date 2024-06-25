import "server-only"
import { cache } from "react"

async function getBlogs() {
    const res = await fetch('http://localhost:3001/api/blogs',
      {
        next: {
          revalidate: 30
        }
      }
    )
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   const data = await res?.json()
    return data
  }
 
   
  export default getBlogs
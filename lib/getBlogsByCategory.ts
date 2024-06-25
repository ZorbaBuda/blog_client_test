import "server-only"

async function getBlogsByCategory(categoryName : String) {
  console.log(categoryName)
    const res = await fetch(`http://localhost:3001/api/categories/${categoryName}`)
    
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   const result = await res?.json()
    return result.data
  }
 
   
  export default getBlogsByCategory
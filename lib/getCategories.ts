import { cache } from "react"

async function getCategories() {

  try{
    const res = await fetch(`${process.env.SERVER_API!}/api/categories`,
      {
       cache: "no-store"
        }
      
    )
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   const data = await res?.json()
    return data
  } catch(error){
    console.log(error)
    return []
  }
  }
 
   
  export default getCategories
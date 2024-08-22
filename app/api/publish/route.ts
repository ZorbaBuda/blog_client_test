import { NextRequest, NextResponse } from "next/server";
import * as fs from 'fs'

enum PublishTypes  {
    HOME_PAGE = "homePage",
    ABOUT_PAGE = "aboutPage",
}



export async function POST( request: Request){


    console.log("heyy")

    const res = await request.json()
    

    const stringifyEn = JSON.stringify(res.en)
   const stringifyEs = JSON.stringify(res.es)

    
    fs.writeFile('dict.json', stringifyEn, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('file written successfully')
      }
    });
    

    return NextResponse.json(
        { message: "Failed to create a comment" },
        { status: 500 }
      );
    

    // try {

    //     await connect()
    //     const data = await Home.find()


    //     return new NextResponse(JSON.stringify(data), {status : 200})
        
    // } catch (error) {
    //     return NextResponse.json(
    //         { error: true, message: "Something went wrong", data: error },
    //         { status: 500 }
    //       );
    // }
}
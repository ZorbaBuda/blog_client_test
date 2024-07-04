import  { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// https://dev.to/martinp/use-notion-as-a-database-for-your-nextjs-blog-195p
export async function POST(request: Request) {
  const data = await request.json();
  console.log("herreeee", data);
  const entry: any = {
    parent: {
      // database_id: `${process.env.NOTION_CONTACT_DATABASE_ID}`,
      database_id: `${process.env.NOTION_DATA_ID}`,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: `${data.name}`,
            },
          },
        ],
      },

      Surname: {
        rich_text: [
                        {
                            text: {
                                content: `${data.surname}`,
                            },
                        },
                    ],
      },

      Email: {
        rich_text: [
            {
                text: {
                    content: `${data.email}`,
                },
            },
        ],
      },
      Message: {
        rich_text: [
            {
                text: {
                    content: `${data.message}`,
                },
            },
        ],
      },
    },
   
  };
  const notion = new Client({ auth: `${process.env.NOTION_SECRET}` });
  const response = await notion.pages.create(entry);
  return new NextResponse(JSON.stringify({
    message: "message was submitted, will respond ASAP"
  }))
}

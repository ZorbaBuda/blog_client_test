import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// https://dev.to/martinp/use-notion-as-a-database-for-your-nextjs-blog-195p
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const entry: any = {
      parent: {
        // database_id: `${process.env.NOTION_CONTACT_DATABASE_ID}`,
        database_id: `${process.env.NOTION_DATA_ID}`,
      },
      properties: {
        Date: {
          date: {
            start: `${data.date}`,
          },
        },

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

        Phone: {
          rich_text: [
            {
              text: {
                content: `${data.phone}`,
              },
            },
          ],
        },

        Email: {
          email: `${data.email}`,
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

    return new NextResponse(
      JSON.stringify({
        success: "message was submitted",
        response: response,
      }),
      { status: 201 }
    );
  } catch (error) {
    JSON.stringify({
      message: "Error submitting form",
      error,
    }),
      { status: 500 };
  }
}

// export async function POST(request: Request) {
//   const data = await request.json();
//   console.log("herreeee", data);
//   const entry: any = {
//     parent: {
//       // database_id: `${process.env.NOTION_CONTACT_DATABASE_ID}`,
//       database_id: `${process.env.NOTION_DATA_ID}`,
//     },
//     properties: {
//       Name: {
//         title: [
//           {
//             text: {
//               content: `${data.name}`,
//             },
//           },
//         ],
//       },

//       Surname: {
//         rich_text: [
//                         {
//                             text: {
//                                 content: `${data.surname}`,
//                             },
//                         },
//                     ],
//       },

//       Email: {
//         rich_text: [
//             {
//                 text: {
//                     content: `${data.email}`,
//                 },
//             },
//         ],
//       },
//       Message: {
//         rich_text: [
//             {
//                 text: {
//                     content: `${data.message}`,
//                 },
//             },
//         ],
//       },
//     },

//   };
//   const notion = new Client({ auth: `${process.env.NOTION_SECRET}` });
//   const response = await notion.pages.create(entry);
//   return new NextResponse(JSON.stringify({
//     message: "message was submitted, will respond ASAP"
//   }))
// }

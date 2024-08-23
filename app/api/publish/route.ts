import { NextResponse } from "next/server";
import { writeFileSync } from "fs";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

enum PublishTypes {
  HOME_PAGE = "homePage",
  ABOUT_PAGE = "aboutPage",
}

export async function POST(request: Request) {
  const res = await request.json();

  const fileEn = "./messages/en.json";
  const fileEs = "./messages/es.json";

  try {
    switch (res.type) {
      case PublishTypes.HOME_PAGE:
        en.home = res.en;
        es.home = res.es;
        break;
      case PublishTypes.ABOUT_PAGE:
        en.about = res.en;
        es.about = res.es;
        break;
      default:
        console.log("Publish type not found");
    }

    writeFileSync(fileEn, JSON.stringify(en));
    writeFileSync(fileEs, JSON.stringify(es));

    return NextResponse.json(
      { success: true, message: "Published" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Something went wrong", data: error },
      { status: 500 }
    );
  }
}

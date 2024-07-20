import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GetFeed() {
  try {
    const feed = await prisma.post.findMany({
      where: { published: false },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return feed;
  } catch (error) {
    return "An error occurred while processing the request.";
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  try {
    const postFeed = await prisma.post.create({
      data: data,
    });

    if (!postFeed) {
      return NextResponse.json({
        status: 500,
        data: "Unable to post feed",
      });
    }
    return NextResponse.json(postFeed);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

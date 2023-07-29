import prisma from "@/lib/prisma";

export async function GET() {
  /*  const posts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "github",
            mode: "insensitive",
          },
        },
        {
          title: {
            contains: "twitter",
            mode: "insensitive",
          },
        },
      ],
      AND: {
        published: true,
      },
    },
  }); */

  const posts = await prisma.post.findMany({
    where: {
      author: {
        isNot: {
          name: "Jack",
        },
        is: {
          email: {
            startsWith: "s",
          },
        },
      },
    },
    // include: { author: true },
    select: {
      title: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(posts));
}

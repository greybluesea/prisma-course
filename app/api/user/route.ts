import prisma from "@/lib/prisma";

export async function GET() {
  /*  const users = await prisma.user.findMany({
    where: {
      AND: [
        {
          id: {
            not: {
              gt: 2,
            },
          },
        },
        {
          name: {
            endsWith: "k",
          },
        },
      ],
    },
  }); */

  const users = await prisma.user.findMany({
    where: {
      posts: {
        none: {
          published: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(users));
}

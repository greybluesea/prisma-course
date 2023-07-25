import prisma from "@/lib/prisma";

export async function GET() {
  /*  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          id: {
            not: {
              gt: 1,
            },
          },
        },
        {
          name: {
            startsWith: "s",
          },
        },
      ],
    },
  }); */

  const users = await prisma.user.findMany({
    where: {
      posts: {
        every: {
          published: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(users));
}

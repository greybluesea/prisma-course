import prisma from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany({
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
  });
  return new Response(JSON.stringify(users));
}

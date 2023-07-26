import prisma from "@/lib/prisma";

export async function POST() {
  const createdUser = await prisma.user.create({
    data: {
      email: "greybluesea@gmail.com",
      name: "tony",
      role: "USER",
      posts: {
        create: [
          {
            title: "prima crash course",
            published: true,
            categories: {
              // connect: [{ id: 1 }, { id: 2 }],
              connectOrCreate: [
                {
                  where: {
                    id: 3,
                  },
                  create: {
                    name: "New Category",
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  return new Response(JSON.stringify(createdUser));
}

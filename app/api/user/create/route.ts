import prisma from "@/lib/prisma";

interface NewUser {
  name: string;
  email: string;
}

/* export async function POST() {
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
} */

/* export async function POST() {
  const createdUsers = await prisma.user.createMany({
    data: [
      {
        email: "firstNewUser@email.com",
        name: "firstNewUser",
      },
      {
        email: "secondNewUser@email.com",
        name: "secondNewUser",
      },
    ],
  });

  return new Response(JSON.stringify(createdUsers));
} */

export async function POST(req: Request) {
  const newUser: NewUser = await req.json();
  const newUserCreated = await prisma.user.create({ data: newUser });

  return new Response(JSON.stringify(newUserCreated));
}

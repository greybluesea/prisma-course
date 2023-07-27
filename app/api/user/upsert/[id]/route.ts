import prisma from "@/lib/prisma";

interface UpsertUser {
  name: string;
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  // const upsertUser: UpsertUser = await req.json();

  const upsertedUser = await prisma.user.upsert({
    where: {
      id: +params.id,
    },
    update: {
      name: "userFounded",
    },
    create: {
      name: "newUserCreated",
      email: "newUserCreated@email.com",
    },
  });

  return new Response(JSON.stringify(upsertedUser));
}

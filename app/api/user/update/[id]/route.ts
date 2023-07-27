import prisma from "@/lib/prisma";

interface UpdateUser {
  name: string;
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const updateUser: UpdateUser = await req.json();

  const updatedUser = await prisma.user.update({
    where: {
      id: +params.id,
    },
    data: {
      name: updateUser.name,
    },
  });

  return new Response(JSON.stringify(updatedUser));
}

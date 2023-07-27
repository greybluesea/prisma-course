import prisma from "@/lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const deletedUser = await prisma.user.delete({
    where: {
      id: +params.id,
    },
  });

  return new Response(JSON.stringify(deletedUser));
}

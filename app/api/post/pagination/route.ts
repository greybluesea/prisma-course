import prisma from "@/lib/prisma";

// offset based
/* export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = +(searchParams.get("page") ?? 1);
  const size = +(searchParams.get("size") ?? 3);

  const posts = await prisma.post.findMany({
    skip: (page - 1) * size,
    take: size,
  });

  return new Response(JSON.stringify(posts));
} */

// cursor based
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cursor = +(searchParams.get("cursor") ?? 1);
  const size = +(searchParams.get("size") ?? 2);

  const posts = await prisma.post.findMany({
    cursor: {
      id: cursor,
    },
    take: size,
  });

  return new Response(JSON.stringify(posts));
}

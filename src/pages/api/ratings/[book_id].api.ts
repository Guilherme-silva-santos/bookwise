import { prisma } from "@/services/database/prismadb"
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next/types"
import { buildNextAuthOptions } from "../auth/[...nextauth].api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET') {
		return res.status(405).end();
	}
  
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  const bookId = req.query.book_id as string;

	const ratings = await prisma.rating.findMany({
    where: {
      book_id: bookId,
    },
    orderBy: [
      {
        created_at: 'desc'
      }
    ],
    include: {
      user: true,
      book: true
    }
  });

 	return res.status(200).json({ ratings });
}


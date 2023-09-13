import { prisma } from "@/services/database/prismadb"
import { NextApiRequest, NextApiResponse } from "next/types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET') {
		return res.status(405).end()
	}
  
	const popularBooks = await prisma.rating.findMany({
    orderBy: [
      {
        rate: 'desc'
      }
    ],
    include: {
      book: true
    },
    take: 4
  });

 	return res.status(200).json({ popularBooks });
}


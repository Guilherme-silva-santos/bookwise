import { prisma } from "@/services/database/prismadb"
import { NextApiRequest, NextApiResponse } from "next/types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET') {
		return res.status(405).end()
	}

	const book_id = req.query.book_id as string;
	
	const categories = await prisma.categoriesOnBooks.findMany({
	  where: {
	    book_id: book_id
	  },
		select: {
			category: true
		}
	});

	return res.status(200).json({ categories })
}
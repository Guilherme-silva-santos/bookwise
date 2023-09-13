import { prisma } from "@/services/database/prismadb"
import { NextApiRequest, NextApiResponse } from "next/types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET') {
		return res.status(405).end()
	}

	const bookId = String(req.query.id)
	
	const bookExists = await prisma.book.findUnique({
	  where: {
	    id: bookId,
	  },
		include: {
			ratings: {
				include: {
					user: true
				}
			},
			categories: {
				select: {
					book_id: true,
					categoryId: true,
					category: true
				}
			},
		}
	});
	if(!bookExists) return null;

	const book = {
		id: bookExists.id,
		name: bookExists.name,
		author: bookExists.author,
		summary: bookExists.summary,
		cover_url: bookExists.cover_url,
		created_at: bookExists.created_at,
		total_pages: bookExists.total_pages,
	}

	return res.status(200).json({ 
		book,
		ratings: bookExists.ratings,
		categories: bookExists.categories
	})
}
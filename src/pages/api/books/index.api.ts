import { prisma } from "@/services/database/prismadb"
import { NextApiRequest, NextApiResponse } from "next/types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET') {
		return res.status(405).end()
	}
  
  const filter = req.query.filter as string;

	const books = await prisma.book.findMany({
    where: {
      ...(filter ? {
        categories: {
          some: {
            category: {
              name: filter
            }
          }
        }
      }: {})
    },
    include: {
      ratings: true
    },
  });

  const content = books.map(book => {
    return {
      books: {
        id: book.id,
        name: book.name,
        author: book.author,
        cover_url: book.cover_url,
        created_at: book.created_at,
        summary: book.summary,
        total_pages: book.total_pages,
      },
      ratings: book.ratings,
    }
  })

	return res.status(200).json(content);
}


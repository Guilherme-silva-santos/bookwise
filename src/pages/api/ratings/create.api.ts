import { z } from "zod";
import { getServerSession } from 'next-auth';
import { prisma } from "@/services/database/prismadb"
import { NextApiRequest, NextApiResponse } from "next/types"
import { buildNextAuthOptions } from '../auth/[...nextauth].api';

const createRatingSchema = z.object({
  description: z.string(),
  book_id: z.string(),
  rate: z.number(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'POST') {
		return res.status(405).end()
	}
  
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  if(!session) return;

  const {description, book_id, rate} = createRatingSchema.parse(req.body);
  
  const userAlreadyRatingBook = await prisma.rating.findFirst({
    where: {
      user_id: session.id,
      book_id: book_id
    }
  });
  if(userAlreadyRatingBook) {
    return res.status(400).json({
      message: `The user already has a rating of this book.`
    });
  }

  await prisma.rating.create({
    data: {
      book_id,
      description,
      rate: rate,
      user_id: session.id
    }
  });

	return res.status(201).end();
}


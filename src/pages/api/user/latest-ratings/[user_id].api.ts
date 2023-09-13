import { prisma } from "@/services/database/prismadb"
import { NextApiRequest, NextApiResponse } from "next/types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET') {
		return res.status(405).end()
	}
  
  const userId = req.query.user_id as string;

	const ratings = await prisma.rating.findMany({
    where: {
      user_id: userId
    },
    orderBy: [
      {
        created_at: 'desc'
      }
    ],
    include: {
      book: true,
    },
    take: 10,
  });

  // const ratingsByDate = ratings.reduce((acc, rating) => {
  //   const date = rating.created_at.toDateString();
    
  //   if (!acc[date]) {
  //     acc[date] = [];
  //   }

  //   acc[date].push(rating);
  //   return acc;
  // }, []);

  // console.log(ratingsByDate)

	return res.status(200).json(ratings)
}
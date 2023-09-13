import { getServerSession } from "next-auth";
import { prisma } from "@/services/database/prismadb"
import { NextApiRequest, NextApiResponse } from "next/types"
import { buildNextAuthOptions } from "../auth/[...nextauth].api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET') {
		return res.status(405).end()
	}
  
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  );
  
  if(!session) {
    return res.status(404).json({
      message: 'User not autheticated.!'
    })
  }

	const ratings = await prisma.rating.findMany({
    where: {
      user_id: session.id
    },
    orderBy: [
      {
        created_at: 'desc'
      }
    ],
    include: {
      book: true
    },
    take: 10
  });


	return res.status(200).json({ratings})
}
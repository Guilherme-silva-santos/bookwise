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

	const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
  });


	return res.status(200).json({user})
}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
//   req.body
//   console.log(req.body);
  const userDelete = await prisma.user.deleteMany({
    where:{
      id: req.body.id
    }
  })
  res.status(200).json(userDelete)
}


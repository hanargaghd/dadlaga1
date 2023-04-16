// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
type Data = {
  name: string
  list:any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const list :any= await prisma.user.findMany()
  res.status(200).json({ name: 'Bat-erdene bna',list })
}

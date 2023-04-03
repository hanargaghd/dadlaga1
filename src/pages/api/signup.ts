import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req :any, res: any) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    console.log('Signup successful:', user);
    res.status(200).json({ message: 'Signup successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Signup failed' });
  }
}
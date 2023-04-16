import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user || user.password !== password) {
      res.status(401).json({ message: 'Invalid email or password' });
    } else {
      console.log('Login successful:', user);
      res.status(200).json({ message: 'Login successful' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Login failed' });
  }
}

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, username, password } = body;

    if (!email || !username || !password) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), {
        status: 400,
      });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User already exists' }), {
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify({ message: 'User created successfully', user: newUser }), {
      status: 201,
    });
  } catch (error) {
    console.error('Signup error:', error);
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
}

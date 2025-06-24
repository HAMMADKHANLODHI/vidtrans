import { NextResponse } from 'next/server';
import { verifyAccessToken } from '@/lib/jwt';

export async function GET(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) return NextResponse.json({ message: "No token" }, { status: 401 });

  const token = authHeader.split(" ")[1];
  const user = verifyAccessToken(token);

  if (!user) return NextResponse.json({ message: "Invalid token" }, { status: 403 });

  return NextResponse.json({ message: `Hello ${user.email}` });
}

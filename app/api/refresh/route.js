import { NextResponse } from 'next/server';
import { verifyRefreshToken, signAccessToken } from '@/lib/jwt';

export async function POST(req) {
  const refreshToken = req.cookies.get('refreshToken')?.value;

  if (!refreshToken) return NextResponse.json({ message: "No token" }, { status: 401 });

  const payload = verifyRefreshToken(refreshToken);
  if (!payload) return NextResponse.json({ message: "Invalid token" }, { status: 403 });

  const newAccessToken = signAccessToken({ email: payload.email });

  return NextResponse.json({ accessToken: newAccessToken });
}

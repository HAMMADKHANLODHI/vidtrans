import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ message: "Logged out successfully" });

  res.cookies.set('refreshToken', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  return res;
}

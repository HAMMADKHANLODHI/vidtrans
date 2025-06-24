'use server';

import { cookies } from 'next/headers';

export async function handleLogout() {
  cookies().set('accessToken', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });

  return { success: true };
}

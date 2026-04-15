import { NextResponse } from 'next/server'

export function middleware(request) {
  // Rewrite /career to /Career
  if (request.nextUrl.pathname === '/career') {
    return NextResponse.rewrite(new URL('/Career', request.url))
  }
}

export const config = {
  matcher: '/career',
}

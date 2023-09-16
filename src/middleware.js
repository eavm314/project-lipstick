import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|auth|login).*)',
  ],
}

export async function middleware(req) {
  const res = NextResponse.next();
  // console.log(req.nextUrl.pathname)
  
  const supabase = createMiddlewareClient({ req, res });
  const {data: {session}} = await supabase.auth.getSession();
  // console.log(session);

  // const authCookie = req.cookies.get('sb-wlcwonwprftismlrkejl-auth-token')
  // console.log(authCookie) 

  if (!session) {
    console.log("no hay login");
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return res;
}
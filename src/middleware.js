import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/dist/server/api-utils';
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next();
  // console.log(req.nextUrl.pathname)
  
  if (req.nextUrl.pathname.startsWith('/_next') ) {
    return res;
  }
  if (req.nextUrl.pathname.startsWith('/api') ) {
    return res;
  }
  if (req.nextUrl.pathname.startsWith('/auth') ) {
    return res;
  }

  if (req.nextUrl.pathname.startsWith('/login') ) {
    return res;
  }

  // const supabase = createMiddlewareClient({ req, res });
  // const {data} = await supabase.auth.getSession();
  // console.log(data);

  const authCookie = req.cookies.get('sb-wlcwonwprftismlrkejl-auth-token')
  // console.log(authCookie) 

  if (!authCookie) {
    console.log("no hay login");
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return res;
}
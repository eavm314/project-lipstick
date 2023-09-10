import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/dist/server/api-utils';
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next();
  if (req.nextUrl.pathname.startsWith('/login')) {
    return res;
  }

  const supabase = createMiddlewareClient({ req, res });
  const {data} = await supabase.auth.getSession();
  console.log(data);
  if (data.session == null) {
    // console.log("no hay login");
    // res.redirect("/login");
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return res;
}
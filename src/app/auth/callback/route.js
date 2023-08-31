import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request) {
    console.log("callback")
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
        const supabase = createRouteHandlerClient({ cookies })
        await supabase.auth.exchangeCodeForSession(code)

        const {data: {user}} = await supabase.auth.getUser();
        // console.log(user)
        const userInfo = {
            id: user.id,
            email: user.email,
            name: user.user_metadata.name,
            image: user.user_metadata.picture,
        };

        const {data, error} = await supabase.from("user").insert(userInfo);
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestUrl.origin)
}
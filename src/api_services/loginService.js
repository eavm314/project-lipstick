import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const signUp = async (email, password) => {
    console.log("sign up");

    const supabase = createServerComponentClient({cookies})
    // console.log(supabase);

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    return {data, error}
}

export const signIn = async (email, password) => {
    console.log("sign in");

    const supabase = createServerComponentClient({cookies})
    // console.log(supabase);

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    return {data, error}
}

export const signInGoogle = async () => {
    console.log("sign in google");
    // console.log(supabase);

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });

    return {data, error}
}

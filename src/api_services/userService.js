import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const getUser = async (req) => {
    const supabase = createServerActionClient({cookies: () => req.cookies});
    const {data}  = await supabase.from("user").select("*").limit(1).single();
    return data;
}

export const updateUser = async (newData, req) => {
    console.log("update");
    const supabase = createServerComponentClient({cookies: () => req.cookies});
    const {data: {user}} = await supabase.auth.getUser();

    const {data} = await supabase.from("user").update(newData).eq("id",user.id).select();
    // console.log("error", error);
    return data[0];
}


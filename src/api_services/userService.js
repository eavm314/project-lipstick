import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getUser = async () => {
    const supabase = createServerActionClient({cookies});
    const {data, error}  = await supabase.from("user").select("*").limit(1).single();
    return data;
}

export const updateUser = async (newData) => {
    console.log("update");
    const supabase = createServerComponentClient({cookies});
    const {data: {user}} = await supabase.auth.getUser();

    const {data, error} = await supabase.from("user").update(newData).eq("id",user.id).select();
    // console.log("error", error);
    return data[0];
}


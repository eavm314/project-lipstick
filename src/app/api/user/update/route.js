import { updateUser } from "@/api_services/userService";
import { NextResponse } from "next/server"

export async function PUT(request) {
    const user = await request.json();
    console.log(user);
    try {
        const {data, error} = await updateUser(user);
        if (!error) {
            return NextResponse.json({
                message: "user updated successfully",
                status: 200,
                data
            });
        } else {
            return NextResponse.json({
                message: "unauthorized",
                status: 403,
                data: null
            });
        }
        
    } catch (error) {
        return NextResponse.json({
            message: "server error",
            status: 500,
            error
        })
    }

}
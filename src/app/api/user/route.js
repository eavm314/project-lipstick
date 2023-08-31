import { getUser } from "@/api_services/userService";
import { NextResponse } from "next/server"

export async function GET() {
    
    try {
        const user = await getUser();

        if (user) {
            return NextResponse.json({
                message: "data retrieved successfully",
                status: 200,
                data: user
            });
        } else {
            return NextResponse.json({
                message: "no user logged",
                status: 201,
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
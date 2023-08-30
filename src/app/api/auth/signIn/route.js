import { signIn } from "@/api_services/loginService";
import { NextResponse } from "next/server"

export async function POST(request) {
    const body = await request.json();
    const name = body.name;
    try {
        const {data, error} = await signIn(body.email, body.password)

        if (!error) {
            return NextResponse.json({
                message: "User logged successfully",
                status: 200,
            });
        } else {
            return NextResponse.json(error)
        }

    } catch (error) {
        return NextResponse.json({
            message: "Server error",
            status: 500,
            error
        })
    }

}
import { signUp } from "@/api_services/loginService";
import { NextResponse } from "next/server"

export async function POST(request) {
    const body = await request.json();
    const name = body.name;
    try {
        const {data, error} = await signUp(body.email, body.password)

        if (!error) {
            return NextResponse.json({
                message: "Account created successfully",
                status: 200,
                data
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
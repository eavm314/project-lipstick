import { getProductById } from "@/api_services/productsService";
import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    try {
        const product = await getProductById(params.id);
        return NextResponse.json({
            message: "data retrieved successfully",
            status: 200,
            data: product
        });
        
    } catch (error) {
        return NextResponse.json({
            message: "error",
            status: 500,
            error
        })
    }

}
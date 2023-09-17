import { getProducts } from "@/api_services/productsService";
import { NextResponse } from "next/server"

export async function GET(req) {
    try {
        const products = await getProducts(req);
        return NextResponse.json({
            message: "data retrieved successfully",
            status: 200,
            data: products
        });
        
    } catch (error) {
        return NextResponse.json({
            message: "server error",
            status: 500,
            error
        })
    }

}
import { createCompra} from "@/api_services/compraService";
import { NextResponse } from "next/server"

export async function POST(request) {
    const compra = await request.json();
    console.log(compra);
    try {
        const {data, error} = await createCompra(compra);
        return NextResponse.json({
            message: "compra inserted successfully",
            status: 200,
            data
        });
    
        
    } catch (error) {
        return NextResponse.json({
            message: "server error",
            status: 500,
            error
        })
    }

}
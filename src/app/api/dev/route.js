import { NextResponse } from "next/server"

export async function GET(request) {
    const obj = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    };

    const values = request.headers.get("harg");
    console.log(values)

    return NextResponse.json({ obj });
}
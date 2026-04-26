import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	const data = await req.json()
  		console.log("New lead:", data) // replace with DB write for real world use..
  	return NextResponse.json({ success: true })
}

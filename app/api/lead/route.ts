import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	const data = await req.json()
  		console.log("New lead:", data) // replace with DB write if needed
  	return NextResponse.json({ success: true })
}

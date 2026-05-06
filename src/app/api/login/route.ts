import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  return NextResponse.json(
    { message: "Post request successful", body },
    { status: 201 },
  );
}

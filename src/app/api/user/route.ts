import { NextRequest, NextResponse } from "next/server";
import { UserResponse } from "@/types/user";

export async function GET(
  request: NextRequest,
): Promise<NextResponse<UserResponse>> {
  const query = request.nextUrl.searchParams; //接受url中的参数
  return NextResponse.json({
    message: `Get request successful, id is ${query.get("id")}`,
  });
}

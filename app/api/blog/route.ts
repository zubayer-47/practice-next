import { NextResponse } from "next/server";
import { data } from "../data";

export async function GET(request: Request) {
  return NextResponse.json(data);
}

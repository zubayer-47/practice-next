import { NextResponse } from "next/server";
import { data } from "../../data";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const id = params.id;

  const blog = data.filter((b) => b.id === id);

  return NextResponse.json(blog);
}

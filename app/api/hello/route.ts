import type {NextApiRequest, NextApiResponse} from 'next'
import { NextRequest, NextResponse } from 'next/server';
export async function GET (request:NextApiRequest){
  //console.log(request.nextUrl.searchParams.get("username"))
  return new NextResponse(JSON.stringify({ message: "hello user"}), {
    status: 200,
  });
} 
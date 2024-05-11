import { NextRequest, NextResponse } from 'next/server';
export async function GET (req:NextRequest , context:{params:{username:string}}){
  //console.log(request.nextUrl.searchParams.get("username"))
  return new NextResponse(JSON.stringify({ message: "hello "+context.params.username ,
  searchParams: req.nextUrl.searchParams,
  pathname: req.nextUrl.pathname,
 }), {
    status: 200,
  });
} 
import type {NextApiRequest, NextApiResponse} from 'next'
import { NextResponse } from 'next/server';

export async function GET (request:NextApiRequest){
    return new NextResponse(JSON.stringify({ message: "welcome to crud api entry !" }), {
    status: 200,
  });
} 
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient

export async function GET(){
    const res = await prisma.user.findMany();
    return Response.json(res);
}

export async function POST(req: Request){
    const data = await req.json()
    const res = await prisma.user.create(data);
    return NextResponse.json({data:res}, {status: 200});
}
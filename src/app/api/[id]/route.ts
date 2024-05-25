import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(req: Request, {params : {id}} : {params :{id:string}}){
    const body = await req.json();
    const res = prisma.user.update({data:body, where:{id: Number(id)}})
    return NextResponse.json({data:res , status:200});
}

export async function DELETE(req: Request, {params : {id}} : {params :{id:string}}){
    const body = await req.json();
    const res = prisma.user.delete({where:{id: Number(id)}});
    return NextResponse.json({data:res , status: 200});
}
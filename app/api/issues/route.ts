import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Taskschema } from "../../validationschema";


const prisma = new PrismaClient(); // Initialize PrismaClient instance
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = Taskschema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })};

  const newTask = await prisma.task.create({
    data: { 
      task: body.title, 
      description: body.description,
      dueDate: body.dueDate,
      category: body.category},

  });
  return NextResponse.json(newTask, {status : 201});


}

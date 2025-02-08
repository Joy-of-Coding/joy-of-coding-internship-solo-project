import { z } from "zod";

export const Taskschema = z.object({
  title: z.string().min(1, "title is required").max(255),
  description: z.string().min(1, "Description is required."),
  dueDate: z.string().datetime().optional(), // Ensure it matches Prisma type
  category: z.string().min(1,"Category is required" ),
});

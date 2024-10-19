"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export const signup = async (values) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, first_name, last_name, phone_number, role } =
    validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email or phone number already taken" };

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      first_name,
      last_name,
      phone_number,
      role,
    },
  });

  // TODO Email verification

  return { success: "User created successfully" };
};

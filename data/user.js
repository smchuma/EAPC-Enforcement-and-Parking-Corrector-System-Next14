import { db } from "@/lib/db";

export const getUserByEmail = async (email) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserByPhone = async (phone_number) => {
  try {
    const user = await db.user.findUnique({ where: phone_number });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    const user = await db.user.findUnique({ where: id });
    return user;
  } catch (error) {
    return null;
  }
};

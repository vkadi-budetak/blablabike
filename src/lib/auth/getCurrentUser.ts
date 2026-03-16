import { getServerSession } from "next-auth";

import { db } from "@/db/db";
import { users } from "@/db/tables/users";
import { eq } from "drizzle-orm";

import type { CurrentUser } from "@/types/CurrentUser";
import { mapUserToCurrentUser } from "./mapUserToCurrentUser";
import { authOptions } from "./auth-options";
import { getUserByEmail } from "@/app/api/user/get-current-user";

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const user = await getUserByEmail(session.user.email);
 

  if (!user) {
    return null;
  }

  return mapUserToCurrentUser(user);
}

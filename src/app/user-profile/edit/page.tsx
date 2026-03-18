import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { getUserByEmail } from "@/app/api/user/get-current-user";
import EditProfileForm from "@/components/profile/EditProfileForm";

export default async function EditProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await getUserByEmail(session.user.email);
  if (!user) {
    redirect("/login");
  }

  return <EditProfileForm user={user} />;
}

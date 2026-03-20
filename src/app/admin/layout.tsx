import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { getUserByEmail } from "@/app/api/user/get-current-user";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await getUserByEmail(session.user.email);

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <main className="mx-auto max-w-7xl px-6 pb-10 pt-28">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[210px_1fr]">
        <aside className="self-start">
          <AdminSidebar />
        </aside>

        <section>{children}</section>
      </div>
    </main>
  );
}

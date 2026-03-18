import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { getUserByEmail } from "@/app/api/user/get-current-user";
import AccountSummarySection from "@/components/profile/bookings/AccountSummarySection";
import CurrentBookingsSection from "@/components/profile/bookings/CurrentBookingsSection";
import PastBookingsSection from "@/components/profile/bookings/PastBookingsSection";
import { getUserBookings } from "@/app/api/actions-booking/get-user-bookings";
import { mapBookingRowsToListItems } from "@/lib/bookings/bookings.mapper";
import { buildBookingsPageData } from "@/lib/bookings/bookings.service";

export default async function BookingHistoryPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await getUserByEmail(session.user.email);
  if (!user) {
    redirect("/login");
  }

  const rows = await getUserBookings();
  const bookingItems = mapBookingRowsToListItems(rows);
  const { currentBookings, pastBookings, summary } =
    buildBookingsPageData(bookingItems);

  return (
    <div className="space-y-6">
      <CurrentBookingsSection bookings={currentBookings} />
      <PastBookingsSection bookings={pastBookings} />
      <AccountSummarySection summary={summary} />
    </div>
  );
}

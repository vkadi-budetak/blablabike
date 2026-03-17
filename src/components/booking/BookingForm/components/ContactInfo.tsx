export const ContactInfo = () => (
  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <input
        type="text"
        placeholder="First Name"
        className="w-full rounded-lg border border-zinc-300 p-3 bg-zinc-50/50"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full rounded-lg border border-zinc-300 p-3 bg-zinc-50/50"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-lg border border-zinc-300 p-3 bg-zinc-50/50"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full rounded-lg border border-zinc-300 p-3 bg-zinc-50/50"
      />
    </form>
  </div>
);

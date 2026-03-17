"use client";

import { RentalPeriod } from "./components/RentalPeriod";
import { ContactInfo } from "./components/ContactInfo";
import { AdditionalOptions } from "./components/AdditionalOptions";

export default function BookingForm({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  options,
  setOptions,
  dbAccessories,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <div className="space-y-6">
      <RentalPeriod
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        etEndDate={setEndDate}
      />
      <ContactInfo />

      <AdditionalOptions
        options={options}
        setOptions={setOptions}
        dbAccessories={dbAccessories} // 2. ПЕРЕДАЄМО СЮДИ
      />
    </div>
  );
}

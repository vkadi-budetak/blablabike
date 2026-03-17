"use client";
import { useState, useEffect } from "react";
import BookingForm from "../BookingForm";
import OrderSummary from "../OrderSummary";
import PaymentSection from "../PaymentSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BookingContainer({ bike }: { bike: any }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dbAccessories, setDbAccessories] = useState<any[] | null>(null);
  const [options, setOptions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch("/api/actions-accessory/read-all-accessories")
      .then((res) => res.json())
      .then((data) => {
        setDbAccessories(data);
        const initialOptions: Record<string, boolean> = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.forEach((acc: any) => {
          initialOptions[acc.id] = false;
        });
        setOptions(initialOptions);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-12">
        <BookingForm
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          options={options}
          setOptions={setOptions}
          dbAccessories={dbAccessories}
        />
        <PaymentSection />
      </div>
      <div className="lg:col-span-1">
        <OrderSummary
          bike={bike}
          startDate={startDate}
          endDate={endDate}
          options={options}
          dbAccessories={dbAccessories}
        />
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import BookingForm from "../BookingForm";
// import OrderSummary from "../OrderSummary";
// import PaymentSection from "../PaymentSection";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export default function BookingContainer({ bike }: { bike: any }) {
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const [options, setOptions] = useState({
//     helmet: false,
//     lock: false,
//     insurance: false,
//   });

//   return (
//     <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-3">
//       <div className="lg:col-span-2 space-y-12">
//         <BookingForm
//           startDate={startDate}
//           setStartDate={setStartDate}
//           endDate={endDate}
//           setEndDate={setEndDate}
//           options={options}
//           setOptions={setOptions}
//         />
//         <PaymentSection />
//       </div>

//       <div className="lg:col-span-1">
//         <OrderSummary
//           bike={bike}
//           startDate={startDate}
//           endDate={endDate}
//           options={options}
//         />
//       </div>
//     </div>
//   );
// }

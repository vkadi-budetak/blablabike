import { getBikes } from "@/api/getBikes";
import BikeCard from "@/components/catalog/BikeCard/BikeCard"; 

export default async function CatalogPage() {
const bikes = await getBikes();

return (
<div className="container mx-auto py-10">



  <h1>Header </h1>
  <h1>Header </h1>
    <h1>Header </h1>
<h1 className="text-3xl font-bold mb-8 text-center">Bike catalog</h1>




  {bikes.length === 0 ? (
    <p className="text-center text-gray-500">Bikes not found...</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bikes.map((bike) => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </div>
  )}
</div>
);
}
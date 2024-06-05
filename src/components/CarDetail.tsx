import { Brand, CarModel } from '@prisma/client'

interface CarDetailProps {
  car: {
    brand: Brand;
    model: CarModel;
    description: string | null; 
    price: number | null; 
    year: number | null; 
    color: string | null;
    location: string | null;
  } | null; 
}

const CarDetail = ({ car }: CarDetailProps) => {
  if (!car) {
    return <div>Car not found</div>;
  }


  return (
<div className="flex flex-col p-6 mt-1.5 rounded-md bg-[#ecf3f8] shadow-md">
  <div className="text-4xl py-2">{car.brand.name} {car.model.name}</div>
  <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-3">
      <div className="py-2 text-justify">{car.description}</div>
    </div>
    <div className="w-full md:w-1/2 pl-4">
      <div className="py-2">Price: {car.price} CZK</div>
      <div className="py-2">Year of manufacture: {car.year}</div>
      <div className="py-2">Color: {car.color}</div>
      <div className="py-2">Location: {car.location}</div>
    </div>
  </div>
</div>

  )
}

export default CarDetail;

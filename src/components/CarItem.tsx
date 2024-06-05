import { CarWithDeps } from '@/types/prismaTypes'
import Link from 'next/link'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <Link href={`car/${car.id}`} className="cursor-pointer" title="View car detail">
      <div className="my-5 p-3 rounded-md shadow-md hover:shadow-2xl transition duration-300 hover:bg-[#ecf3f8]">
        <div className="text-2xl text-[color:#3d8ab8]">{car.brand.name} {car.model.name}</div>
        <div className="flex justify-between">
          <div>
            {car.location}, {car.year}
          </div>
          <div className="text-right font-semibold">
            {car.price} CZK
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CarItem

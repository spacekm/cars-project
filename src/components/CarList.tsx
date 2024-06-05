import CarItem from './CarItem'
import { CarWithDeps } from '@/types/prismaTypes'
import { Brand, CarModel } from '@prisma/client'

type Props = {
  cars: CarWithDeps[]
  models: CarModel[]
  brands: Brand[]
}

const CarList = ({ cars, brands, models }: Props) => {
  return (
    <div>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  )
}

export default CarList

import prisma from '@/utils/prisma'
import CarDetail from '@/components/CarDetail'

const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: {
      id: id,
    },
    include: {
      model: true,
      brand: true,
    },
  })
  return car
}

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id)

  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Car detail</h1>
      <CarDetail car={car} />
    </div>
  )
}

export default CarDetailPage
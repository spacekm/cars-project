import NewCarForm from '@/components/NewCarForm'
import prisma from '@/utils/prisma'

const fetchBrands = async () => {
  const brands = await prisma.brand.findMany()
  return brands
}

const fetchModels = async () => {
  const models = await prisma.carModel.findMany()
  return models
}

const NewCarPage = async () => {
  const brands = await fetchBrands()
  const models = await fetchModels()

  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Add a new car</h1>
      <NewCarForm brands={brands} models={models} />
    </div>
  )
}

export default NewCarPage

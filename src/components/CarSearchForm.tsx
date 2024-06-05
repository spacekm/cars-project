'use client'
import { Brand, CarModel } from '@prisma/client'
import BrandAndModelSearch from './BrandAndModelSearch'
import { useRouter, useSearchParams } from 'next/navigation'

const CarSearchForm = ({
    models,
    brands,
  }: {
    models: CarModel[]
    brands: Brand[]
  }) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const obj = {
        location: formData.get('location')?.toString() ?? '',
        brand: formData.get('brand')?.toString() ?? '',
        model: formData.get('model')?.toString() ?? '',
      }
  
      router.push(
        `?location=${obj.location}&brand=${obj.brand}&model=${obj.model}`
      )
    }

    const objectsRefreshed = {
      location: searchParams.get('location'),
      brand: searchParams.get('brand'),
      model: searchParams.get('model'),
    }

    return (
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col p-6 mt-1.5 rounded-md bg-[#ecf3f8] shadow-md">
          <BrandAndModelSearch 
           models={models}
           brands={brands}
           refreshedParams={{
             brand: objectsRefreshed.brand || '',
             model: objectsRefreshed.model || '',
           }}
          />
          <label className="my-2 flex items-center">
            <span className="w-24">Location:</span>
            <input type="text" className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3" id="locationId" name="location" defaultValue={objectsRefreshed.location || ''}/>
          </label>
          <button type="submit" className="mt-4 px-6 py-2 bg-[#316e93] text-white rounded-md hover:bg-[#1f455c] transition-colors duration-300">Filter results</button>
        </form>
      </div>
    )
  }
  
  export default CarSearchForm
  
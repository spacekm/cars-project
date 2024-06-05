'use client'
import { Brand, CarModel } from '@prisma/client'
import { Fragment, useMemo, useState } from 'react'

const BrandAndModelFormFields = ({
  models,
  brands,
}: {
  models: CarModel[]
  brands: Brand[]
}) => {
  const [brandId, setBrandId] = useState('')

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId)
  }, [brandId, models])
  return (
    <Fragment>
<label className="my-2 flex items-center">
  <span className="w-24">Brand:</span>
  <select
    name="brandId"
    required={true}
    value={brandId}
    onChange={(e) => setBrandId(e.target.value)}
    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3"
  >
    <option value="" disabled selected>
      Select a brand
    </option>
    {brands.map((brand) => (
      <option key={brand.id} value={brand.id}>
        {brand.name}
      </option>
    ))}
  </select>
</label>

<label className="my-2 flex items-center">
  <span className="w-24">Model:</span>
  <select
    name="modelId"
    required={true}
    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3"
  >
    {filteredModels.map((model) => (
      <option key={model.id} value={model.id}>
        {model.name}
      </option>
    ))}
  </select>
</label>

    </Fragment>
  )
}

export default BrandAndModelFormFields
'use client'
import { Brand, CarModel } from '@prisma/client';
import { Fragment, useMemo, useState, useEffect } from 'react';

const BrandAndModelSearch = ({
  models,
  brands,
  refreshedParams,
}: {
  models: CarModel[];
  brands: Brand[];
  refreshedParams?: {
    brand: string;
    model: string;
  };
}) => {
  const [brandId, setBrandId] = useState(refreshedParams?.brand || '');
  const [modelId, setModelId] = useState(refreshedParams?.model || '');

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId);
  }, [brandId, models]);

  useEffect(() => {
    if (refreshedParams) {
      setBrandId(refreshedParams.brand);
      setModelId(refreshedParams.model);
    }
  }, [refreshedParams]);

  return (
    <Fragment>
<label className="my-2 flex items-center">
  <span className="w-24">Brand:</span>
  <select
    id="brandId"
    name="brand"
    value={brandId}
    onChange={(e) => {
      setBrandId(e.target.value);
      setModelId('');
    }}
    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3"
  >
    <option value="">Select a brand</option>
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
    id="modelId"
    name="model"
    value={modelId}
    onChange={(e) => setModelId(e.target.value)}
    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3"
  >
    <option value="">Select a model</option>
    {filteredModels.map((model) => (
      <option key={model.id} value={model.id}>
        {model.name}
      </option>
    ))}
  </select>
</label>

    </Fragment>
  );
};

export default BrandAndModelSearch;

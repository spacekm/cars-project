'use client'
import { useState } from 'react';
import { createCar } from '@/utils/actions';
import { Brand, CarModel } from '@prisma/client';
import BrandAndModelFormFields from './BrandAndModelFormFields';
import Link from 'next/link';

const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await createCar(formData);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleAddAnotherCar = () => {
    setFormSubmitted(false); 
  };

  return (
    <div>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col p-6 mt-1.5 rounded-md bg-[#ecf3f8] shadow-md">
  <BrandAndModelFormFields models={models} brands={brands} />
  <label className="my-2 flex items-center">
    <span className="w-24">Price:</span>
    <input type="text" name="price" required={true} className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3"/>
    CZK
  </label>
  <label className="my-2 flex items-center">
    <span className="w-24">Year:</span>
    <input type="text" name="year" required={true} className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3"/>
  </label>
  <label className="my-2 flex items-center">
    <span className="w-24">Color:</span>
    <input type="text" name="color" required={true} className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3"/>
  </label>
  <label className="my-2 flex items-center">
    <span className="w-24">Location:</span>
    <input type="text" name="location" required={true} className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3"/>
  </label>
  <label className="my-2 flex items-center">
    <span className="w-24">Description:</span>
    <input type="text" name="description" required={true} className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8ab8] mx-3"/>
  </label>
  <button type="submit" className="mt-4 px-6 py-2 bg-[#316e93] text-white rounded-md hover:bg-[#1f455c] transition-colors duration-300">Submit</button>
</form>


      ) : (
        <div className='justify-center mt-1.5'>
          <div className='bg-green-600 text-white p-3 text-center'>
            <p>Data saved successfully</p>
          </div>
          <div className='mt-2 p-3 bg-[#ecf3f8] rounded-md shadow-md'>
            <div className='p-3 flex items-center justify-center'>
            <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDN1YTR0bHJiNXg1a3pyeGR4YnNtaWFxZDJ6eXZ0MnVuejZ3ZjllMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUOxffjYz7dUSB5YxG/giphy.webp'></img>
            </div>

            <div className='p-3 flex items-center justify-center'>
            <Link href="/car/new" passHref legacyBehavior >
              <a onClick={handleAddAnotherCar} className="mt-4 px-6 py-2 bg-[#316e93] text-white rounded-md hover:bg-[#1f455c] transition-colors duration-300">Add another car</a>
            </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCarForm;

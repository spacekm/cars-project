'use server'

import { redirect } from 'next/navigation'
import prisma from './prisma'

export const createCar = async (formData: FormData) => {
  const modelId = formData.get('modelId')?.toString();
  const brandId = formData.get('brandId')?.toString();
  const price = formData.get('price')?.toString();
  const year = formData.get('year')?.toString();
  const color = formData.get('color')?.toString();
  const location = formData.get('location')?.toString();
  const description = formData.get('description')?.toString();

  if (!modelId || !brandId || !price || !year || !color || !location || !description) {
    return;
  }

  try {
    await prisma.car.create({
      data: {
        modelId,
        brandId,
        price: parseFloat(price),
        year: parseInt(year),
        color,
        location,
        description,
      },
    });

    redirect('/');
  } catch (error) {
    console.error('Error creating car', error);
    // Handle error appropriately, e.g., show error message to user
  }
};
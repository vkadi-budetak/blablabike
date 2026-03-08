import { Bike } from "@/types/bike";

interface FakeProduct {
id: number;
title: string;
price: number;
category: string;
description: string;
image: string;
}

export const getBikes = async (): Promise<Bike[]> => {
try {
const response = await fetch('https://fakestoreapi.com/products');

if (!response.ok) {
  throw new Error('Ошибка сети');
}

const data: FakeProduct[] = await response.json();

return data.map((item) => ({
  id: item.id.toString(),
  model: item.title,
  price: Math.round(item.price),
  // Исправленный блок категории:
  category: {
    id: item.id,
    name: item.category,
    image: item.image
  },
  image: item.image,
  description: item.description,
  status: item.id % 3 === 0 ? 'In Repair' : 'Available',
}));
} catch (error) {
console.error("Ошибка API:", error);
return [];
}
};
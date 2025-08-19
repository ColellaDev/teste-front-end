import type { ProductTypes } from '../types/product';

const API_URL = import.meta.env.VITE_API_URL as string;

export async function fetchProducts(): Promise<ProductTypes[]> {
  if (!API_URL) {
    throw new Error('VITE_API_URL não definida');
  }

  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`Erro ao buscar produtos: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.products as ProductTypes[];
}
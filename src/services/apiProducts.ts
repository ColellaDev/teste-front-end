

export async function fetchProducts() {
  const response = await fetch("http://localhost:4000/produtos");
  const data = await response.json();
  return data.products;
}
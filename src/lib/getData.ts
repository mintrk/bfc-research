export async function getData() {
  const response = await fetch("https://fakestoreapi.com/products/1");
  return response.json();
}

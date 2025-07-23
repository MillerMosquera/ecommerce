export const sortOptions = [
  { label: 'RELEVANCE', value: 'RELEVANCE' },
  { label: 'PRICE: LOW TO HIGH', value: 'PRICE_HIGH' },
  { label: 'PRICE: HIGH TO LOW', value: 'PRICE_LOW' },
  { label: 'RATING', value: 'RATING' },]

//export const size = ["S", "M", "L", "XL", "39", "40", "41", "One Size"];
//export const category = ["Camisetas", "Lentes", "Bufanda", "Reloj", "Zapatos", "Gorra", "Chancletas", "Bolso", "Jeans"];
//export const brand = ["Nike", "Samsung", "Kawasaki", "Mizuno", "Nintendo", "Motorola", "GMC"];

export function category(products){
  return Array.from(new Set(products.map(product => product.category).filter(Boolean)));
}

export function size(products) {
  return Array.from(new Set(products.flatMap(product => product.size || [])));
}

export function brand(products) {
  return Array.from(new Set(products.map(product => product.brand).filter(Boolean)));
}
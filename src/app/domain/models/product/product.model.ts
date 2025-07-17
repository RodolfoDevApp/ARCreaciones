export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  productionTime: number;
  pricePerPackage: number;
  unitsPerPackage: number;
  image?: string;
  stock?: number;
}

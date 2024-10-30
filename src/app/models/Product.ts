export interface Product {
  id: number;
  productName?: string | null;
  productType: 'SILVER' | 'GOLD';
  productWeight: number;
  productPrice: number;
  productTenure: number;
  productStatus: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: Date;
  updatedAt: Date;
}

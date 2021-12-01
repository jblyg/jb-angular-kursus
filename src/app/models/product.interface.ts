
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    details: ProductDetails;
    available: boolean;
    rating: number;
  }

  export interface ProductDetails {
    height: number;
    length: number;
    width: number;
    weight: number;
    productCode: string;
  }
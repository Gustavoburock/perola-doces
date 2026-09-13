export interface SizeOption {
  sizeId: string;
  label: string;
  price: number; // Final price for this size option
}

export type ProductCategory = 'bolos_festa' | 'ovos_colher' | 'copo_felicidade' | 'outras_sobremesas';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number; // Base price for default size
  priceUnit: string; // e.g., "kg", "50 unid.", "combo"
  image: string;
  fallbackImage?: string;
  sizes?: SizeOption[];
  customizable?: boolean;
  featured?: boolean;
  tags?: string[];
}

export interface CartItem {
  id: string; // Unique ID for the cart line (product.id + sizeId + customText hash)
  product: Product;
  quantity: number;
  selectedSize: SizeOption | null;
  customText?: string;
}

export interface Occasion {
  id: string;
  name: string;
  description: string;
  tagline: string;
  recommendedProductIds: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  productOrdered: string;
  avatar: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  caption: string;
  date: string;
  postUrl: string;
  title?: string;
}

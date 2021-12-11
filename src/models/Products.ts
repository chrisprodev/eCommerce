export interface productInterface {
  id: string;
  name: string;
  images: string[];
  category: string;
  price: number;
  mainFeatures: string[];
  features: {
    title: string;
    description: string;
  }[];
  created: { nanoseconds: number; seconds: number };
}

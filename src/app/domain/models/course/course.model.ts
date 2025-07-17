export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string; // Ej: "4 semanas"
  price: number;
  mode: 'presencial' | 'en línea';
  imageUrl?: string;
  category: string; // Ej: lettering, cera, scrapbooking
  subscribed:boolean;
}

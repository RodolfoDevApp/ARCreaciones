import { Course } from "src/app/domain/models/course/course.model";

export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Introducción al Lettering',
    description: 'Aprende técnicas básicas de caligrafía moderna.',
    duration: '3 semanas',
    price: 950,
    mode: 'en línea',
    category: 'lettering',
    imageUrl: 'assets/images/courses/lettering.jpg',
    subscribed: false
  },
  {
    id: 2,
    title: 'Velas Artesanales para Principiantes',
    description: 'Crea tus propias velas desde cero con cera de soya.',
    duration: '2 semanas',
    price: 750,
    mode: 'presencial',
    category: 'cerería',
    imageUrl: 'assets/images/courses/velas.jpg',
    subscribed: false
  }
];

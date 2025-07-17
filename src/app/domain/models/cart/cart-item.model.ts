import { Course } from "../course/course.model";
import { Product } from "../product/product.model";

export type CartItem = {
  type: 'product' | 'course';
  data:  Product | Course;
  quantity: number;

};

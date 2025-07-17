import { Observable } from 'rxjs';
import { Course } from '../../models/course/course.model';

export abstract class CourseRepository {
  abstract getAll(): Observable<Course[]>;
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockCourses } from './course.mock';
import { CourseRepository } from 'src/app/domain/repositories/course/course.repository';
import { Course } from 'src/app/domain/models/course/course.model';

@Injectable({ providedIn: 'root' })
export class CourseRepositoryImpl implements CourseRepository {
  getAll(): Observable<Course[]> {
    return of(mockCourses);
  }
}

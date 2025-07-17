import { inject, Injectable } from "@angular/core";
import { CourseRepository } from 'src/app/domain/repositories/course/course.repository';

@Injectable({ providedIn: 'root' })
export class GetCoursesUseCase {
  private repository = inject(CourseRepository);

  execute() {
    return this.repository.getAll();
  }
}

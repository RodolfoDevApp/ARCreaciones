// presentation/shared/services/loading.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  readonly loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }

  /**
   * Envuelve un observable o promesa para mostrar y ocultar el loader automáticamente.
   */
  wrap<T>(promise: Promise<T>): Promise<T> {
    this.show();
    return promise.finally(() => this.hide());
  }
}

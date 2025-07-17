import { Component } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ARCreaciones';
  constructor(public loading: LoadingService) { }

  get loading$() {
    return this.loading.loading$;
  }
  
}

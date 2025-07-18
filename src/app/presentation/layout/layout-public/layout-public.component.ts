import { Component } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-layout-public',
  templateUrl: './layout-public.component.html',
  styleUrls: ['./layout-public.component.scss']
})
export class LayoutPublicComponent {
 isSidenavOpen = true;
loading$ = this.loadingService.loading$;

  constructor(private readonly loadingService: LoadingService) {}

  toggleSidebar() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  closeSidebar() {
    console.log('entra?');
    this.isSidenavOpen = true;
  }
  
}

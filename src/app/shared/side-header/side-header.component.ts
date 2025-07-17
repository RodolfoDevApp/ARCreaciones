import { Component, Input } from '@angular/core';

@Component({
  selector: 'side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.scss']
})
export class SideHeaderComponent {
 @Input() open = true;

  links = [
  { label: 'Inicio', path: '/', icon: 'home' },
  { label: 'Productos', path: '/products', icon: 'inventory_2' },
  { label: 'Carrito', path: '/cart', icon: 'shopping_cart' },
];
}

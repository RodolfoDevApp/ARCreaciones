import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.scss']
})
export class SideHeaderComponent {
 @Input() open = true;
 @Output() closed = new EventEmitter<void>();

  links = [
  { label: 'Inicio', path: '/', icon: 'home' },
  { label: 'Productos', path: '/store', icon: 'inventory_2' },
  { label: 'Carrito', path: '/cart', icon: 'shopping_cart' },
];

onLinkClick() {
    this.closed.emit();
  }
}

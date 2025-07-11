import { Component, input } from '@angular/core';
import { StoreItem } from '../../interfaces/StoreItem';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-store-item',
  imports: [RouterModule],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.less'
})
export class StoreItemComponent {
  storeItem = input.required<StoreItem>();
}

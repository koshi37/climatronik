import { Component, inject } from '@angular/core';
import { StoreItem } from './interfaces/StoreItem';
import { StoreItemComponent } from "./component/store-item/store-item.component";
import { CommonModule } from '@angular/common';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-store',
  imports: [StoreItemComponent, CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.less'
})
export class StoreComponent {
  storeItems: StoreItem[] = [];
  private storeService = inject(StoreService);
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  
  constructor() {
    this.storeItems = this.storeService.getStoreItems();
  }
}

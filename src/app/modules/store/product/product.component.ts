import { Component, inject, input } from '@angular/core';
import { StoreService } from '../services/store.service';
import { ActivatedRoute } from '@angular/router';
import { StoreItem } from '../interfaces/StoreItem';
import { MatIcon } from '@angular/material/icon';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [MatIcon, NgFor, FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent {
  route: ActivatedRoute  = inject(ActivatedRoute);
  storeService = inject(StoreService);
  product: StoreItem | undefined;

images: string[] = [
    'https://sklep.auroks.pl/userdata/public/gfx/89448/r35.jpg',
    'https://sklep.auroks.pl/userdata/public/gfx/109269/Etykieta-energetyczna.webp',
    'https://dmuchamy.pl/data/gfx/pictures/large/2/8/15482_11.png?1713445310',
  ];
  selectedImage = this.images[0];

  quantity = 1;

  selectImage(img: string) {
    this.selectedImage = img;
  }


  addToCart() {
    alert(`Dodano ${this.quantity}x do koszyka.`);
  }




  isZoomed = false;

  zoomImage() {
    this.isZoomed = true;
  }

  closeZoom() {
    this.isZoomed = false;
  }




  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = this.storeService.getStoreItemById(productId);
  }
}

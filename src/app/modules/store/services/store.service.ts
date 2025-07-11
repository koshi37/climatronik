import { Injectable } from '@angular/core';
import { availability, StoreItem, storeItemCategory } from '../interfaces/StoreItem';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  getStoreItems(): StoreItem[] {
    return [
      {
        id: 11,
        name: 'SAMSUNG AR35 Klimatyzator ścienny',
        photo: 'https://sklep.auroks.pl/userdata/public/gfx/89448/r35.jpg',
        availability: availability.duzy_wybor,
        category: storeItemCategory.scienna,
        price: 3809.99,
        power: '3500W',
        noise: 'od 20 dB',
        temperature: '-25 do 50 °C',
        desc: 'Klimatyzator SAMSUNG AR35 to nowoczesne urządzenie zapewniające komfortową temperaturę przez cały rok. Dzięki innowacyjnej technologii WindFree, chłodzenie odbywa się bez nieprzyjemnych podmuchów powietrza, co gwarantuje wyjątkowy komfort użytkowania. Urządzenie charakteryzuje się wysoką wydajnością energetyczną, cichą pracą (od 20 dB) oraz szerokim zakresem temperatur pracy (-25°C do 50°C). Klimatyzator posiada funkcję inteligentnego sterowania Wi-Fi, filtrację powietrza oraz tryb oszczędzania energii. Idealnie sprawdzi się zarówno w domu, jak i w biurze.'
      },
      {
        id: 12,
        name: 'Clima1000',
        desc: 'Klimatyzacja do każdego domu i mieszkania. Wysoka jakość, niska cena.',
        category: storeItemCategory.scienna,
        photo: 'https://angular.dev/assets/images/tutorials/common/example-house.jpg',
        availability: availability.duzy_wybor,
        price: 3999.99,
        power: '3500W',
        noise: 'od 20 dB',
        temperature: '-25 do 50 °C',
      },
      {
        id: 13,
        name: 'Clima2000',
        category: storeItemCategory.scienna,
        photo: 'https://angular.dev/assets/images/tutorials/common/example-house.jpg',
        availability: availability.wyprzedane,
        desc: 'Trochę inna klimatyzacja do każdego domu i mieszkania.',
        price: 4999.59,
        power: '3500W',
        noise: 'od 20 dB',
        temperature: '-25 do 50 °C',
      },
      {
        id: 14,
        name: 'Clima500',
        category: storeItemCategory.scienna,
        photo: 'https://angular.dev/assets/images/tutorials/common/example-house.jpg',
        availability: availability.ograniczona_ilosc,
        desc: 'Tańsza klimatyzacja do każdego domu i mieszkania.',
        price: 2499.59,
        power: '3000W',
        noise: 'od 25 dB',
        temperature: '-25 do 40 °C',
      }
    ];
  }

  getStoreItemById(id: number): StoreItem | undefined {
    return this.getStoreItems().find(item => item.id === id);
  }
}

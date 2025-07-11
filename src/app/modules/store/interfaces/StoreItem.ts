export interface StoreItem {
  id: number;
  name: string;
  desc: string;
  price: number;
  power: string;
  noise: string;
  temperature: string;
  photo: string;
  availability: availability;
  category: storeItemCategory;
}

export enum storeItemCategory {
  scienna = 'scienna',
  przenosna = 'przenosna',
  kasetonowa = 'kasetonowa',
  przypodlogowa = 'przypodlogowa',
}

export enum availability {
  duzy_wybor = 'Duży wybór',
  ograniczona_ilosc = 'Ograniczona ilość',
  wyprzedane = 'Wyprzedane',
}

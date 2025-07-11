import { Routes } from '@angular/router';
import { StoreComponent } from './modules/store/store.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/store/product/product.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Witaj w Climatronik'
    },
    {
        path: 'store',
        component: StoreComponent,
        title: 'Climatronik Sklep'
    },
    {
        path: 'store/product/:id',
        component: ProductComponent,
        title: 'Climatronik Sklep'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Kontakt'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'O nas'
    },
    {
        path: '**',
        component: HomeComponent,
        title: 'Witaj w Climatronik'
    },
];

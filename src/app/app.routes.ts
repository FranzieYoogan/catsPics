import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreedsComponent } from './breeds/breeds.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'breeds', component: BreedsComponent },
    { path: 'search', component: SearchComponent },
];

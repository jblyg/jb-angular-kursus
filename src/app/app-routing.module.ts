import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'orders', 
    loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ContactComponent } from './contact/contact.component'; 

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'menu/details/:menuId', component: ProductDetailsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/details/:productId', component: ProductDetailsComponent},
  {path: 'order-success', component: OrderSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})

export class AppRoutingModule { }

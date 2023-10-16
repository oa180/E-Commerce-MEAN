import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { SigninComponent } from './pages/components/authenticaton/signin/signin.component';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';
import { AuthGuard } from './carts/services/authGuard.guard';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  { path: 'cart', component: CartsComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/product',
    component: DashboardProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

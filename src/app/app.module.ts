import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FiltersComponent } from './shared/components/filters/filters.component';
import { HomeComponent } from './pages/components/home/home.component';
import { SliderComponent } from './slider/slider.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { HistortProductsComponent } from './histort-products/histort-products.component';
import { FavoriteBrandsComponent } from './favorite-brands/favorite-brands.component';
import { CardComponent } from './card/card.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './pages/components/authenticaton/signin/signin.component';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NavbarComponent,
    FooterComponent,
    FiltersComponent,
    HomeComponent,
    SliderComponent,
    RecommendedComponent,
    HistortProductsComponent,
    FavoriteBrandsComponent,
    CardComponent,
    ProductDetailsComponent,
    CartsComponent,
    SigninComponent,
    NotFoundComponent,
    DashboardComponent,
    DashboardCardComponent,
    DashboardProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

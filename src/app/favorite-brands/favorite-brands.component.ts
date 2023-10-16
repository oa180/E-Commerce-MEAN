import { Component } from '@angular/core';
import { ProductsService } from '../carts/services/products.service';
import { ProductInterface } from '../interfaces/product-interface';

@Component({
  selector: 'app-favorite-brands',
  templateUrl: './favorite-brands.component.html',
  styleUrls: ['./favorite-brands.component.css'],
})
export class FavoriteBrandsComponent {
  constructor(private productsService: ProductsService) {}
  favProducts: ProductInterface[] = [];
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.favProducts = res.data.splice(13, 6);
      console.log(res.data);
    });
  }
}

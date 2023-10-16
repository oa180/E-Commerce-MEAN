import { Component } from '@angular/core';
import { ProductsService } from '../carts/services/products.service';
import { ProductInterface } from '../interfaces/product-interface';

@Component({
  selector: 'app-histort-products',
  templateUrl: './histort-products.component.html',
  styleUrls: ['./histort-products.component.css'],
})
export class HistortProductsComponent {
  constructor(private productsService: ProductsService) {}
  basedHistoryProducts: ProductInterface[] = [];
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.basedHistoryProducts = res.data.splice(7, 6);
    });
  }
}

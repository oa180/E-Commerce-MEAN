import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../carts/services/products.service';
import { ProductInterface } from '../interfaces/product-interface';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
})
export class RecommendedComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  recommendedProducts: ProductInterface[] = [];
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.recommendedProducts = res.data.splice(0, 6);
    });
  }
}

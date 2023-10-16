import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { CartsService } from '../../services/carts.service';
import { ProductsService } from '../../services/products.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent implements OnInit {
  cartItems: any = [];

  constructor(
    private cartService: CartsService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.cartService
      .getUserCart('65294ef50a501b0d0da85373')
      .subscribe((res) => {
        console.log(res.data.products);

        res.data.products.map((product: any) => {
          console.log(product.pid);

          this.productService.getOneProduct(product.pid).subscribe((res) => {
            this.cartItems.push({
              productDetails: res.data,
              count: product.count,
            });
          });
        });

        console.log('c', this.cartItems);

        // this.cartItems = res.data.products;
      });
  }
}

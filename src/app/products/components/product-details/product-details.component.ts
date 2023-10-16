import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/carts/services/auth.service';
import { CartsService } from 'src/app/carts/services/carts.service';
import { ProductsService } from 'src/app/carts/services/products.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-prosuct-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: ProductInterface | undefined = undefined;
  constructor(
    private productSerice: ProductsService,
    private cartService: CartsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productSerice.getOneProduct(params['id']).subscribe((res) => {
        this.product = res.data;
      });
    });
  }

  addToCart() {
    if (this.authService.isLoggedIn$) {
      this.cartService.addProductToCart(this.product!.id).subscribe((res) => {
        this.cartService.cartCountSubject.next(res.data.products.length);
      });
    } else {
      console.log('logged');
      this.router.navigate(['/signin']);
    }
  }
}

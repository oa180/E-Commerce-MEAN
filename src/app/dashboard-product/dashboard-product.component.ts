import { Component } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { ProductsService } from '../carts/services/products.service';
import { CartsService } from '../carts/services/carts.service';
import { AuthService } from '../carts/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.css'],
})
export class DashboardProductComponent {
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
}

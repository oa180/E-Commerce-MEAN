import { Component, OnInit, Input } from '@angular/core';
import { CartsService } from '../carts/services/carts.service';
import { AuthService } from '../carts/services/auth.service';
import { Router } from '@angular/router';
import { ProductInterface } from '../interfaces/product-interface';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
})
export class DashboardCardComponent implements OnInit {
  constructor(
    private cartService: CartsService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // console.log(this.product);
    this.pId = this.product?.id;
  }
  pId: string | undefined = undefined;
  @Input() product: ProductInterface | null = null;

  addItemToCart(event: any) {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.cartService.addProductToCart(this.product!.id).subscribe((res) => {
          this.cartService.cartCountSubject.next(res.data.products.length);
        });
      } else {
        console.log('logged');
        this.router.navigate(['/signin']);
      }
    });
  }
}

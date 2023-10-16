import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { CartsService } from '../carts/services/carts.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../carts/services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
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

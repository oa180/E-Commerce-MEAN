import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from 'src/app/card/card.component';
import { CartsService } from 'src/app/carts/services/carts.service';
import { AuthService } from 'src/app/carts/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Boolean = false;
  userRole: string = '';
  constructor(
    private cartService: CartsService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.cartService.cartCount$.subscribe((count) => {
      this.count = count;
    });
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.authService.userRole$.subscribe((role) => {
      this.userRole = role;
    });

    console.log(this.isLoggedIn);
  }
  logOut() {
    this.authService.isLoggedInSubject.next(false);
    this.router.navigate(['/']);
  }
  count: number = 0;
}

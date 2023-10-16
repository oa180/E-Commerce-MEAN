import { Component } from '@angular/core';
import { ProductsService } from 'src/app/carts/services/products.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private productsService: ProductsService) {}
  usersProducts: ProductInterface[] = [];
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.usersProducts = res.data;
      console.log(res.data);
    });
  }
}

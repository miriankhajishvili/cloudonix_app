import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../layout/header/header.component';
import { IProduct } from '../../shared/interfaces/products.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    HeaderComponent,
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  currentPage: number = 0;
  displayedColumns: string[] = ['id', 'name', 'cost', 'description', 'detail'];
  products$: Observable<IProduct[]> = this.productsService.getAllProducts();
  items!: number;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
  handlePageEvent($event: PageTransitionEvent) {}
}

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../shared/services/product.service';
import { ProductTableColumns } from '../../shared/enums/columns';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatProgressSpinnerModule
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  public productService = inject(ProductService);
  loading = true

  displayedColumns: string[] = [
    ProductTableColumns.INDEX,
    ProductTableColumns.NAME,
    ProductTableColumns.COST,
    ProductTableColumns.DESCRIPTION,
    ProductTableColumns.DETAIL,
  ];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.productService.productsSignal.set(res);
        this.loading = false
      },
      error: () => {
        this.loading = false
      }
    })
  }
}

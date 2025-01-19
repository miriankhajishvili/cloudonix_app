import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../shared/services/product.service';
import { ProductTableColumns } from '../../shared/enums/columns';

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
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  public productService = inject(ProductService);

  displayedColumns: string[] = [
    ProductTableColumns.Index,
    ProductTableColumns.Name,
    ProductTableColumns.Cost,
    ProductTableColumns.Description,
    ProductTableColumns.Detail,
  ];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.productService.productsSignal.set(products);
    });
  }
}

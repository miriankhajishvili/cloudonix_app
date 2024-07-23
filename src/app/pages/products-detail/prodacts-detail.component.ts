import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { IProduct } from '../../shared/interfaces/products.interface';
import { Console } from 'console';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DeleteConfirmDialogComponent } from '../../shared/components/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-prodacts-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
  ],
  templateUrl: './prodacts-detail.component.html',
  styleUrl: './prodacts-detail.component.scss',
})
export class ProdactsDetailComponent implements OnInit {
  currentProductId: number = this.activatedRoute.snapshot.params['id'];
  currentProduct?: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getCurrentProduct();
  }

  getCurrentProduct() {
    this.productsService
      .getCurrentProduct(this.currentProductId)
      .subscribe((res) => {
        this.currentProduct = res;
        console.log(res);
      });
    this.productsService.currentProductId$.next(this.currentProductId);
  }

  onEditClick() {}

  openDialog(): void {
    this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { IProduct } from '../../shared/interfaces/products.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DeleteConfirmDialogComponent } from '../../shared/components/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddEditProductDialogComponent } from '../../shared/components/add-edit-product-dialog/add-edit-product-dialog.component';
import { Observable, switchMap } from 'rxjs';

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
    MatCheckboxModule,
  ],
  templateUrl: './prodacts-detail.component.html',
  styleUrl: './prodacts-detail.component.scss',
})
export class ProdactsDetailComponent implements OnInit {
  currentProductId: number = this.activatedRoute.snapshot.params['id'];
  currentProduct$!: Observable<IProduct>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getCurrentProduct();
    this.currentProduct$.subscribe(res => console.log('Current', res))
  }

  getCurrentProduct() {
    this.currentProduct$ = this.productsService.currentProductDetail$.pipe(
      switchMap(() => {
        return this.productsService.getCurrentProduct(this.currentProductId);
      })
    );
  }

  

  onEditClick(currentProduct: IProduct) {
    this.dialog.open(AddEditProductDialogComponent, {
      data: {
        onEdit: true,
        id: currentProduct?.id,
        name: currentProduct?.name,
        description: currentProduct?.description,
        sku: currentProduct?.sku,
        cost: currentProduct?.cost,

        profile: {
          type: currentProduct?.profile.type,
          avalable: currentProduct?.profile.available,
          backlog: currentProduct?.profile.backlog,
          customProperties: currentProduct?.profile.customProperties || [] // Add customProperties here

        },
      },
    });
  }

  openDialog(currentProduct: IProduct): void {
    this.dialog.open(DeleteConfirmDialogComponent, {
      data: {
        id: currentProduct.id,
      },
      width: '350px',
    });
  }
}

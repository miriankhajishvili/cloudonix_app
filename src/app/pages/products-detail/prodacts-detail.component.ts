import { MatDividerModule } from '@angular/material/divider';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { ProductService } from '../../shared/services/product.service';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
    MatDividerModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './prodacts-detail.component.html',
  styleUrl: './prodacts-detail.component.scss',
})
export class ProdactsDetailComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  public productService = inject(ProductService);
  public dialog = inject(MatDialog);

  ngOnInit(): void {
    this.setCurrentProductToSignal();
  }

  private setCurrentProductToSignal(): void {
    this.productService
      .getCurrentProduct(this.activatedRoute.snapshot.params['id'])
      .subscribe((res) => this.productService.currentProductSignal.set(res));
  }

  onEditClick(currentProduct: IProduct): void {
    this.dialog.open(AddEditProductDialogComponent, {
      data: {
        onEdit: true,
        id: currentProduct?.id,
        name: currentProduct?.name,
        description: currentProduct?.description,
        sku: currentProduct?.sku,
        cost: currentProduct?.cost,
        profile: {
          type: currentProduct?.profile?.type || 'furniture',
          available: currentProduct?.profile?.available ?? true,
          backlog: currentProduct?.profile?.backlog || null,
          customProperties: currentProduct?.profile?.customProperties || [], // Ensure customProperties is defined
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

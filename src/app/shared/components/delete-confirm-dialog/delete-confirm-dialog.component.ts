import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import { NgToastService } from 'ng-angular-popup';
import { ProductService } from '../../services/product.service';
import { MessageType, ToastMessages } from '../../enums/massages';

@Component({
  selector: 'app-delete-confirm-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrl: './delete-confirm-dialog.component.scss',
})
export class DeleteConfirmDialogComponent {
  readonly data = inject<any>(MAT_DIALOG_DATA);
  private productService = inject(ProductService);
  private router = inject(Router);
  private ngToastService = inject(NgToastService);

  onYesClick() {
    this.productService.deleteProduct(this.data.id).subscribe((res) => {
      this.ngToastService.success({
        detail: MessageType.SUCCESS,
        summary: ToastMessages.DELETE_PRODUCT_SUCCESS,
      });
      this.router.navigate(['/products-list']);
    });
  }
}

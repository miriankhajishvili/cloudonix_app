import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { NgToastService } from 'ng-angular-popup';
import { Subject, takeUntil } from 'rxjs';

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
export class DeleteConfirmDialogComponent implements OnInit, OnDestroy {
  readonly data = inject<any>(MAT_DIALOG_DATA);
  unsubscribe$ = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
    private productsService: ProductsService,
    private router: Router,
    private ngToastService: NgToastService
  ) {}

  ngOnInit(): void {}

  onYesClick() {
    this.productsService
      .deleteProduct(this.data.id)
      // .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.ngToastService.success({
          detail: 'Success Message',
          summary: 'Product deleted successfully',
        });
        this.router.navigate(['/products-list']);
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(), this.unsubscribe$.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
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
  unsubscribe$ = new Subject();

  currentProductId!: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
    private productsService: ProductsService,
    private router: Router,
    private ngToastService: NgToastService
  ) {}

  ngOnInit(): void {
    this.getCurrentUsersId();
  }

  getCurrentUsersId() {
    this.productsService.currentProductDetail$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => (this.currentProductId = res.id));
  }

  onYesClick() {
    this.productsService
      .deleteProduct(this.currentProductId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.ngToastService.success({
          detail: 'Success Message',
          summary: 'Product deleted successfully',
        });
        this.router.navigate(['/products-list']);
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(null), this.unsubscribe$.complete();
  }
}

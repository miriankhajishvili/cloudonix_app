import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../services/product.service';
import { MessageType, ToastMessages } from '../../enums/massages';
@Component({
  selector: 'app-log-out-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './log-out-dialog.component.html',
  styleUrl: './log-out-dialog.component.scss',
})
export class LogOutDialogComponent {
  public productService = inject(ProductService);
  public dialogRef = inject(MatDialogRef<LogOutDialogComponent>);
  private ngToastService = inject(NgToastService);
  private router = inject(Router);

  onYesClick() {
    this.ngToastService.success({
      detail: MessageType.SUCCESS,
      summary: ToastMessages.LOGIN_SUCCESS,
    });
    this.productService.key.set(null);
    this.router.navigate(['/auth/login']);
  }
}

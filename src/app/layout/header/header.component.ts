import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LogOutDialogComponent } from '../../shared/components/log-out-dialog/log-out-dialog.component';
import { AddEditProductDialogComponent } from '../../shared/components/add-edit-product-dialog/add-edit-product-dialog.component';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public dialog = inject(MatDialog);
  public productService = inject(ProductService);

  openDialog(): void {
    this.dialog.open(LogOutDialogComponent, {
      width: '350px',
    });
  }

  onClick() {
    this.dialog.open(AddEditProductDialogComponent, {
      data: {
        onEdit: false,
        profile: {},
      },
      width: '550px',
    });
  }
}

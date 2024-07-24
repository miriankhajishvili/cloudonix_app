import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from '../../services/products.service';
import { NgToastService } from 'ng-angular-popup';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-product-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './add-edit-product-dialog.component.html',
  styleUrls: ['./add-edit-product-dialog.component.scss'],
})
export class AddEditProductDialogComponent implements OnInit {
  readonly data = inject<any>(MAT_DIALOG_DATA);
  onEdit: boolean = false;
  isSKUReadOnly: boolean = true; // Condition to control the read-only state

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    sku: new FormControl('', Validators.required),
    cost: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required]),
    profile: new FormGroup({
      type: new FormControl('furniture', Validators.required),
      available: new FormControl(true, Validators.required),
      backlog: new FormControl(null, Validators.required),
    }),
  });

  constructor(
    private productsService: ProductsService,
    private ngToastService: NgToastService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm.patchValue(this.data);
    this.onEditClick();
  }

  onEditClick() {
    this.productsService.onEditClick$.subscribe((res) => (this.onEdit = res));
  }

  onSubmit(): void {
    if (this.onEdit) {
      this.productsService
        .editProduct(this.data.id, this.productForm.value)
        .subscribe((res) => {
          this.productsService.productsTableUbdate$.next([]);
          this.ngToastService.success({
            detail: 'Success Message',
            summary: 'Product edited successfully',
          });
          this.dialog.closeAll();
          this.router.navigate(['/products-list']);
        });
    } else {
      this.productsService
        .addProduct(this.productForm.value)
        .subscribe((res) => {
          this.productsService.productsTableUbdate$.next([]);
          this.ngToastService.success({
            detail: 'Success Message',
            summary: 'Product added successfully',
          });
          this.dialog.closeAll();
        });
    }
    console.log(this.productForm.value);
  }
}

import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
import { Subject, takeUntil } from 'rxjs';

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
export class AddEditProductDialogComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();
  readonly data = inject<any>(MAT_DIALOG_DATA);
  isSKUReadOnly: boolean = true;
  initialFormValues: any;

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
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productForm.patchValue(this.data);
    this.isSKUReadOnly = this.data.onEdit;
    this.initialFormValues = this.productForm.getRawValue();
  }

  hasFormChanged(): boolean {
    return (
      JSON.stringify(this.initialFormValues) !==
      JSON.stringify(this.productForm.getRawValue())
    );
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      if (this.data.onEdit) {
        this.productsService
          .editProduct(this.data.id, this.productForm.value)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((res) => {
            this.productsService.currentProductDetail$.next(null);
            this.productsService.productsTableUpdate$.next([]);
            this.ngToastService.success({
              detail: 'Success Message',
              summary: 'Product edited successfully',
            });
            this.dialog.closeAll();
          });
      } else {
        this.productsService
          .addProduct(this.productForm.value)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((res) => {
            this.productsService.productsTableUpdate$.next([]);
            this.ngToastService.success({
              detail: 'Success Message',
              summary: 'Product added successfully',
            });
            this.dialog.closeAll();
          });
      }
    }
  }

  

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}

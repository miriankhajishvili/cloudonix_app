import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

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
  ],
  templateUrl: './add-edit-product-dialog.component.html',
  styleUrl: './add-edit-product-dialog.component.scss',
})
export class AddEditProductDialogComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({
    type: new FormControl('furniture', [Validators.required]),
    available: new FormControl(true, [Validators.required]),
    backlog: new FormControl(null, [Validators.required,]),
  });
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    sku: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required, Validators.min(0)]),
    profile: this.profileForm,
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Form Value', this.productForm.value);
    }
  }
}

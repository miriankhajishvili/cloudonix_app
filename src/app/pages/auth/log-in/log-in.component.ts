import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent implements OnInit {
  private router = inject(Router);
  public productService = inject(ProductService);

  hide: boolean = true;

  get getKey() {
    return this.form.get('key');
  }

  form: FormGroup = new FormGroup({
    key: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
    ]),
  });

  ngOnInit(): void {
   console.log(this.productService.key());
  }
  

  submit() {
    if (this.form.valid) {
      localStorage.setItem('key', this.form.value.key);
      this.productService.key.set(localStorage.getItem('key'));
      this.router.navigate(['/products-list']);
    }
  }
}

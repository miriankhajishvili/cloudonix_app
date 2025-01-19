import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
export class LogInComponent {
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

  submit() {
    if (this.form.valid) {
      this.productService.key.set(this.form.value.key);
      this.router.navigate(['/products-list']);
    }
  }
}

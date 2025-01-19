import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const productService = inject(ProductService);

  if (productService.key() != null) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};

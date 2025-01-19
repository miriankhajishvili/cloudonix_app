import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);
  const productService = inject(ProductService);

  if (productService.key()) {
    router.navigate(['/products-list']);
    return false;
  } else {
    return true;
  }
};

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  var productService = inject(ProductService);
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${productService.key()}`,
    },
  });
  return next(authReq);
};

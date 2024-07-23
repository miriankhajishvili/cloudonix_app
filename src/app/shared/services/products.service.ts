import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProduct, IProducts } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {

  currentProductId$ = new BehaviorSubject<number>(0)

  getAllProducts(): Observable<IProduct[]> {
    return this.get<IProduct[]>('items');
  }

  getCurrentProduct(id: number): Observable<IProduct> {
    return this.get<IProduct>(`items/${id}`)
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.delete<IProduct>(`items/${id}`);
  }
}

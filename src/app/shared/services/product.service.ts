import { Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  public key = signal<string | null>(null);
  public currentProductSignal = signal<IProduct | null>(null);
  public productsSignal = signal<IProduct[]>([]);

  getAllProducts(): Observable<IProduct[]> {
    return this.get<IProduct[]>('items');
  }

  getCurrentProduct(id: number): Observable<IProduct> {
    return this.get<IProduct>(`items/${id}`);
  }

  addProduct(newProduct: IProduct): Observable<IProduct> {
    return this.post<IProduct>('items', newProduct);
  }

  editProduct(id: number, form: IProduct): Observable<IProduct> {
    return this.put<IProduct>(`items/${id}`, form);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.delete<IProduct>(`items/${id}`);
  }
}

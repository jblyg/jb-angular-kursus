import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {

    var response = this.http.get<Product[]>('http://localhost:3000/products');
    return response;
  }
}


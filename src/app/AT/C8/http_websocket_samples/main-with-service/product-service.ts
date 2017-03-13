import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  constructor(private http: Http) { }
  public getProductByID(id: number) {
    return this.http.get(`http://localhost:8000/products/${id}`)
      .map((res) => res.json());
  }
}

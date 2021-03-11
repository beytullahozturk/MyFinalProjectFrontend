import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductTResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44339/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductTResponseModel> {
    return this.httpClient.get<ProductTResponseModel>(this.apiUrl);
  }

}

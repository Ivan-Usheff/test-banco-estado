import { Injectable } from '@angular/core';
import {ProdutsInterface} from '../interfaces/products.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string='http://localhost:3001/products';

  constructor( private http:HttpClient ) { }

  getProduts():Observable<ProdutsInterface[]>{
    let data = this.http.get<ProdutsInterface[]>(this.url);
    return data;
  }
}

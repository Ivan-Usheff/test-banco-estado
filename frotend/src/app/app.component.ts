import { Component } from '@angular/core';
import { ProductsService } from '../app/servisces/products.service';

import { ProdutsInterface } from '../app/interfaces/products.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Banco Estado';

  listProducts: ProdutsInterface[];

  constructor( private products:ProductsService){}

  ngOnInit():void {
    this.products.getProduts().subscribe((data) => {
      this.listProducts = data['products'];
      console.log(data);
    });
  }
}

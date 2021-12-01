import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products?: Product[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllProducts().subscribe(
      (data:Product[]) => { 
        this.products = data;
        console.log(data);
       },
      (err) => {console.log ('Det skete en fejl!', err)},
      () => {console.log('Done!!')}
    )
  }

}

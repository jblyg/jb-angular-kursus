import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  @Input() product?: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}

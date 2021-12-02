import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.interface';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  idFromRoute?: number;
  product?: Product;

  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => this.idFromRoute = +data['productId']);
    this.http.getProduct(this.idFromRoute!).subscribe(
      {
        next: (data:Product) => { 
          this.product = data;
         },
        error: (err) => {
          console.log ('Det skete en fejl!', err)
          this.router.navigateByUrl('notfound');
        },
        complete: () => {console.log('Done fetching product!')}
        });
    ;
  }
}

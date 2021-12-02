import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../models/product.interface';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products?: Product[];
  subscription?: Subscription;
  doShowImages: boolean = false;
  filteredProducts?: Product[];

  private _listFilter?: string | undefined;
  public get listFilter(): string | undefined {
    return this._listFilter;
  }
  public set listFilter(value: string | undefined) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(this.listFilter ?? '');
  }

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.subscription = this.httpService.getAllProducts().subscribe(
      {
      next: (data:Product[]) => { 
        this.products = data;
        this.filteredProducts = data;
       },
      error: (err) => {console.log ('Det skete en fejl!', err)},
      complete: () => {console.log('Done!!')}
      }
    )
    // this.products$ = this.httpService.getAllProducts();
  }

  toggleImage() {
    this.doShowImages = !this.doShowImages;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe;
  }

  clearFilter() {
    this.listFilter = "";
  }

  performFilter(filter: string): Product[] | undefined {
    var filterBy = filter?.toLocaleLowerCase();
    return this.products?.filter((p: Product) => {
      return p.title.toLocaleLowerCase().includes(filterBy);      
    });
  }
}

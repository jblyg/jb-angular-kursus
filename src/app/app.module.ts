import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildComponent } from './component-communication/child/child.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContactInfoComponent,
    ParentComponent,
    ChildComponent,
    ContactListComponent,
    ProductListComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

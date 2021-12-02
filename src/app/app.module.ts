import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildComponent } from './component-communication/child/child.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ConvertTextPipe } from './shared/pipes/convert-text.pipe';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    ParentComponent,
    ChildComponent,
    ContactListComponent,
    ProductListComponent,
    ProductInfoComponent,
    ConvertTextPipe,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

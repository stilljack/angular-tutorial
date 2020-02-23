import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewThingComponent } from './new-thing/new-thing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './new-thing/cart.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    NewThingComponent,
    ProductDetailsComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})

export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
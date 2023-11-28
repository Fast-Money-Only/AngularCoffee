import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CoffeesComponent } from './coffees/coffees.component';
import { AddressesComponent } from './addresses/addresses.component';
import { CakesComponent } from './cakes/cakes.component';
import { CoffeePlacesComponent } from './coffee-places/coffee-places.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { OrdersComponent } from './orders/orders.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CoffeesComponent,
    AddressesComponent,
    CakesComponent,
    CoffeePlacesComponent,
    IngredientsComponent,
    MembershipsComponent,
    OrdersComponent,
    PostsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

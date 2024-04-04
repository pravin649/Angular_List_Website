import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { ProductOffersComponent } from './Component/product-offers/product-offers.component';
import { ProductRatingsComponent } from './Component/product-ratings/product-ratings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductServiceComponentComponent } from './module/product-service-component/product-service-component.component';
import { ProductServiceModule } from './module/product-service/product-service.module';
import { AuthGuard } from './Guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductOffersComponent,
    ProductRatingsComponent,
    ProductServiceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ProductServiceModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

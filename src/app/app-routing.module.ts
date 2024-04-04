import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { AuthGuard } from './Guards/auth.guard';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { ProductRatingsComponent } from './Component/product-ratings/product-ratings.component';
import { ProductOffersComponent } from './Component/product-offers/product-offers.component';


const routes: Routes = [
  {path: '', component:ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'products', component:ProductListComponent, canActivate: [AuthGuard]},
  {path: 'products', component:ProductListComponent, canActivate: [AuthGuard]},
  {
    path: 'product/:id', component: ProductDetailsComponent,canActivateChild: [AuthGuard],
    children: [
      { path: 'rating', component: ProductRatingsComponent, canDeactivate: [AuthGuard] },
      { path: 'offers', component: ProductOffersComponent }
    ]
  },
  {
    path: 'service',
    loadChildren: () => import('./module/product-service/product-service.module').then(m => m.ProductServiceModule),
    canLoad: [AuthGuard]
  },
  {path: '**', component:ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
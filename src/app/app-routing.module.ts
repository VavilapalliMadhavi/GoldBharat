import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveRatesComponent } from './live-rates/live-rates.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LocateUsComponent } from './locate-us/locate-us.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayOutComponent } from './lay-out/lay-out.component';

const routes: Routes = [


  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',component:LayOutComponent,children:[
      {
        path:'',component:LiveRatesComponent
      },
      {
        path:'about',component:AboutUsComponent
      },
      {
        path:'product',component:ProductsComponent
      },
      {
        path:'privacy',component:PrivacyPolicyComponent
      },
      {
        path:'locate',component:LocateUsComponent
      },
      {
        path:'booking',component:BookingComponent
      },
    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

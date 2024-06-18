import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import { LiveRatesComponent } from './live-rates/live-rates.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { LocateUsComponent } from './locate-us/locate-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LayOutComponent } from './lay-out/lay-out.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LiveRatesComponent,
    AboutUsComponent,
    ProductsComponent,
    LocateUsComponent,
    PrivacyPolicyComponent,
    BookingComponent,
    RegisterComponent,
    LoginComponent,
    LayOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

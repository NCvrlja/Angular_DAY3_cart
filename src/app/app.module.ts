import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CatsComponent } from './cats/cats.component';
import { CatsDetailsComponent } from './cats-details/cats-details.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogsDetailsComponent } from './dogs-details/dogs-details.component';
import { TurtlesComponent } from './turtles/turtles.component';
import { TurtlesDetailsComponent } from './turtles-details/turtles-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CatsComponent,
    CatsDetailsComponent,
    CartComponent,
    FooterComponent,
    DogsComponent,
    DogsDetailsComponent,
    TurtlesComponent,
    TurtlesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

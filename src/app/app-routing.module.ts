import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { CatsComponent } from "./cats/cats.component"
import { CatsDetailsComponent } from './cats-details/cats-details.component';
import { CartComponent } from './cart/cart.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogsDetailsComponent } from './dogs-details/dogs-details.component';
import { TurtlesComponent } from './turtles/turtles.component';
import { TurtlesDetailsComponent } from './turtles-details/turtles-details.component';

const routes: Routes = [
  {
    path:"", component: HomePageComponent
  },{
    path:"cats", component: CatsComponent
  },{
    path: "cats/:catsID", component: CatsDetailsComponent
  },{
    path: "cart", component: CartComponent
  },{
    path: "dogs", component: DogsComponent
  },{
    path: "dogs/:dogsID", component: DogsDetailsComponent
  },{
    path: "turtles", component: TurtlesComponent
  },{
    path: "turtles/:turtlesID", component: TurtlesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

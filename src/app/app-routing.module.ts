import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";


const routes: Routes = [
  {
    path: "first",
    component: FirstComponent
  },
  {
    path: "second",
    component: SecondComponent,

  },
  {
    path: "**",
    pathMatch:"full",
    redirectTo:"first"
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}

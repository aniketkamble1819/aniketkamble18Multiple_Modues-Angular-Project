import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './eager/child1/child1.component';
import { Child2Component } from './eager/child2/child2.component';
import { LandingComponent } from './eager/landing/landing.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"eager", component:LandingComponent, children:[
    {path:"", redirectTo:"child1",pathMatch:'full'},
    {path:"child1", component:Child1Component},
    {path:"child2", component:Child2Component},
    {path:"**", component:Child1Component},
  ]},
  {path:"lasy",loadChildren:()=>import('./lasy/lasy.module').then(
    m=>m.LasyModule
  )}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

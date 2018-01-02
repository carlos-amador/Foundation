import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { f1Component } from '../feature1/f1.component';
import { f2Component } from '../feature2/f2.component';
import { f3Component } from '../feature3/f3.component';



export const RootRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'feature1',
    pathMatch: 'full'
  },
  { 
    path: 'feature1',
    component: f1Component
  },
  { 
    path: 'feature2',
    component: f2Component
  },
  { 
    path: 'feature3',
    component: f3Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(RootRoutes)],
  exports: [
    RouterModule
  ],
  providers: []
})
export class RoutingModule {

}


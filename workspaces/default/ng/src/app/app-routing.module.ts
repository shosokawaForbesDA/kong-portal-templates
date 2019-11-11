import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component'
import { HomePageComponent } from './home-page/home-page.component';
import { OtherPageComponent } from './other-page/other-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'other-page', component: OtherPageComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

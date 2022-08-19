import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsubComponent } from './addsub/addsub.component';

const routes: Routes = [
  {path:'add',component:AddsubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

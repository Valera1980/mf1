import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './components/one/one.component';

const routes: Routes = [
   {path: '', component: OneComponent}
];


@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FederationOneModule { }

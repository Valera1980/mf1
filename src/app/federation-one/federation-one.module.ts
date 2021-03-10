import { ClipboardModule } from 'ngx-clipboard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './components/one/one.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { NgxMaskModule } from 'ngx-mask';

const routes: Routes = [
  { path: '', component: OneComponent }
];


@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    DragulaModule,
    NgxMaskModule
  ]
})
export class FederationOneModule { }

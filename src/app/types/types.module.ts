import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
  { path: 'reactive', component: ReactiveComponent },
  { path: 'template-driven', component: TemplateDrivenComponent }
]



@NgModule({
  declarations: [
    TemplateDrivenComponent,
    ReactiveComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule
  ]
})
export class TypesModule { }

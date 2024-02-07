import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FromsComponent } from './froms/froms.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FromsComponent },
  { path: 'forms/types/template-driven', redirectTo: 'types/template-driven', pathMatch: 'full' },
  { path: 'forms/types/reactive', redirectTo: 'types/reactive', pathMatch: 'full' },
  { path: 'types', loadChildren: () => import("./types/types.module").then(p => p.TypesModule) },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

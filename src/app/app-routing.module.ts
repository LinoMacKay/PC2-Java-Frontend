import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './core/gastos/gastos.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gastos', component: GastosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

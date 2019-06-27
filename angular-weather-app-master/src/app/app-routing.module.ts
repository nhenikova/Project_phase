import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  { path: '',  redirectTo: 'dashboard', pathMatch: 'full' }, // auto routing to dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:cityId', component: ForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

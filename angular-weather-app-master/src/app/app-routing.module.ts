import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  {path: '', component: CitiesComponent},
  {path: 'forecast', component: ForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

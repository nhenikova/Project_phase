import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrentcityweatherComponent } from './dashboard/currentcityweather/currentcityweather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DayforecastComponent } from './forecast/dayforecast/dayforecast.component';

@NgModule({
  declarations: [
    AppComponent,
     DashboardComponent,
     CurrentcityweatherComponent,
     ForecastComponent,
     DayforecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

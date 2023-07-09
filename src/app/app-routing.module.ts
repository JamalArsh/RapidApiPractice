import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImdbComponent } from './pages/imdb/imdb.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  { path: 'numbers', component: NumbersComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'imdb', component: ImdbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

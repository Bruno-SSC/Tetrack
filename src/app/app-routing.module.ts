import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/daily',
    pathMatch: 'full',
  },
  {
    path: 'home/:timeframe',
    component: CardListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

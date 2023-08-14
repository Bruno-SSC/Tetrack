import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ShowDataComponent } from './components/show-data/show-data.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/daily',
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: 'home/daily',
  },
  {
    path: 'home/:timeframe',
    component: ContainerComponent,
  },
  {
    path: 'actData',
    component: ShowDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { TimeframesNavComponent } from './components/timeframes-nav/timeframes-nav.component';
import { SecMenuComponent } from './components/sec-menu/sec-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/daily',
    pathMatch: 'full',
  },
  {
    path: 'home/:timeframe',
    component: CardListComponent,
    /* children: [
      {
        path: '',
        component: SecMenuComponent,
        children: [
          {
            path: '',
            component: TimeframesNavComponent,
          },
        ],
      },
    ], */
  },
];

/* 
  {
    path: 'deleteMode/:deleteMode',
    component: CardListComponent,
  },
 {
    path: 'newAct',
    component: FormComponent,
  },
  {
    path: 'newAct/:actv',
    component: CardListComponent,
  },
  {
    path: 'edit/:actv',
    component: FormComponent,
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  },

*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

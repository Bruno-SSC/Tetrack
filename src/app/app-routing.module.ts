import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: CardListComponent,
  },
  {
    path: 'cardList/:deleteMode',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
